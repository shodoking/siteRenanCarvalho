import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Asterisk, Check, ImageIcon, Instagram, Mail, Menu, MessageCircle, Monitor, Palette, Play, Sparkles, X, ZoomIn } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import hero from '@/assets/marble_hero.jpg';
import logo from '@/assets/renan_logo_transparent.png.asset.json';
import portrait from '@/assets/renan_portrait.jpg.asset.json';
import portfolio from '@/assets/portfolio_renan_carvalho.pdf.asset.json';
import arte01 from '@/assets/arte01.jpg.asset.json';
import arte02 from '@/assets/arte02.jpg.asset.json';
import arte03 from '@/assets/arte03.jpg.asset.json';
import arteC1 from '@/assets/arteemcanva01.jpg.asset.json';
import arteC2 from '@/assets/arteemcanva02.jpg.asset.json';
import arteC3 from '@/assets/arteemcanva03.jpg.asset.json';
import arteI1 from '@/assets/arteemIA01.jpg.asset.json';
import arteI2 from '@/assets/arteemIA02.jpg.asset.json';
import arteI3 from '@/assets/arteemIA03.jpg.asset.json';
import logo01 from '@/assets/logo01.jpg.asset.json';
import logo02 from '@/assets/logo02.jpg.asset.json';
import logo03 from '@/assets/logo03.jpg.asset.json';
import site01 from '@/assets/site01.jpg.asset.json';
import site02 from '@/assets/site02.jpg.asset.json';
import futuraVideo from '@/assets/25JUN_-_Futura.mp4.asset.json';
import futuraPoster from '@/assets/futuranet_poster.jpg.asset.json';

export const Route = createFileRoute('/')({
 head: () => ({meta:[
  {title:'Renan Carvalho | Design gráfico que transforma marcas'},
  {name:'description',content:'Conheça Renan Carvalho, designer gráfico com mais de 15 anos de experiência. Design para redes sociais, anúncios e sites. Vamos criar sua próxima presença visual.'},
  {property:'og:title',content:'Renan Carvalho | Design gráfico'},
  {property:'og:description',content:'Criatividade, estratégia e mais de 15 anos de experiência para dar presença à sua marca. Conheça o portfólio e converse sobre seu projeto.'},
  {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}
 ]}),component:Index
});
const whatsapp = 'https://wa.me/5516997420925?text=Ol%C3%A1%2C%20Renan!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20design.';
type Project={id:number;title:string;category:string;img:{url:string};video?:{url:string}};
const projects:Project[]=[
 {id:1,title:'Metamorfose — Vagas fecham',category:'Social media',img:arte01},
 {id:2,title:'Agrolaura Pet Clean',category:'Social media',img:arte02},
 {id:3,title:'Novum · DouPet Funny',category:'Social media',img:arte03},
 {id:4,title:'Anhembi Morumbi EAD',category:'Canva',img:arteC1},
 {id:5,title:'UniCesumar — Bolsas de estudo',category:'Canva',img:arteC2},
 {id:6,title:'Dols Watches',category:'Canva',img:arteC3},
 {id:7,title:'Axon — API Oficial Meta',category:'IA',img:arteI1},
 {id:8,title:'Axon — Atendimento 24/7',category:'IA',img:arteI2},
 {id:9,title:'Axon — Chat 24/7',category:'IA',img:arteI3},
 {id:10,title:'msgFlow.IA',category:'Branding',img:logo01},
 {id:11,title:'Khronoz',category:'Branding',img:logo02},
 {id:12,title:'Caroline Honorato',category:'Branding',img:logo03},
 {id:13,title:'Dr. Mateus W. Rezende',category:'Websites',img:site01},
 {id:14,title:'Novum — Game na Copa',category:'Websites',img:site02},
 {id:15,title:'FuturaNet — Fibra óptica',category:'Vídeo',img:futuraPoster,video:futuraVideo},
];
function ProjectArt({p,playing=false}:{p:Project;playing?:boolean}) {
 return <div className={`project-art${p.video?' project-art--video':''}`}>{p.video&&playing?<video className="project-video" src={p.video.url} poster={p.img.url} controls playsInline preload="metadata"/>:<img className="project-image" src={p.img.url} alt={p.title} loading="lazy" width={1080} height={p.video?1920:1350}/>}<span className="project-expand">{p.video?<Play className="size-3.5 fill-current" aria-hidden="true"/>:<ZoomIn className="size-3.5" aria-hidden="true"/>}</span></div>;
}
function ContactButton({label='Vamos criar juntos'}:{label?:string}) {return <Button asChild className="cta-button"><a href={whatsapp} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight/></a></Button>;}
function Index(){
 const [menu,setMenu]=useState(false);
 const [filter,setFilter]=useState('Todos');
 const [selected,setSelected]=useState<number|null>(null);
 const visible=projects.filter(p=>filter==='Todos'||p.category===filter);
 const active=projects.find(p=>p.id===selected);
 function move(direction:number){if(selected===null)return;const index=visible.findIndex(p=>p.id===selected);setSelected(visible[(index+direction+visible.length)%visible.length]?.id??null);}
 useEffect(()=>{if(selected===null)return;function key(e:KeyboardEvent){if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1);}window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[selected,filter]);
 const nav=[['Portfólio','#portfolio'],['Sobre mim','#sobre'],['Serviços','#servicos']];
 return <TooltipProvider delayDuration={180}>
  <header className="site-header"><div className="container-wide flex h-full items-center justify-between gap-6"><a href="#inicio" aria-label="Renan Carvalho, início"><img src={logo.url} className="logo" width={190} height={37} alt="Renan Carvalho — Designer gráfico"/></a><nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">{nav.map(([label,href])=><a className="nav-link" href={href} key={href}>{label}</a>)}<Button asChild variant="outline" className="cta-button h-10"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar<ArrowUpRight/></a></Button></nav><Button variant="ghost" size="icon" className="md:hidden" aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></div>{menu&&<nav className="mobile-menu" aria-label="Navegação móvel">{nav.map(([label,href])=><a href={href} onClick={()=>setMenu(false)} key={href}>{label}</a>)}<a href="#contato" onClick={()=>setMenu(false)}>Vamos conversar ↗</a></nav>}</header>
  <main>
   <section className="hero" id="inicio"><img className="hero-image" src={hero} width={1920} height={1088} alt="Escultura clássica de mármore iluminada diante de um círculo dourado"/><div className="container-wide hero-content reveal"><div className="eyebrow">Criatividade com propósito</div><h1 className="hero-name">Renan Carvalho</h1><p className="hero-title">Sua marca.<br/>Uma nova<br/><em>perspectiva.</em></p><p className="hero-description">Design que vai além do visual. Transformo ideias em experiências que conectam sua marca às pessoas certas.</p><div className="mt-8 flex flex-wrap items-center gap-7"><ContactButton/><Button asChild variant="link" className="p-0 text-xs text-foreground"><a href="#portfolio">Explore o portfólio<ArrowDown className="size-3"/></a></Button></div><div className="hero-foot"><Check className="size-3.5"/><span><strong>+15 anos</strong> transformando ideias em design</span></div></div><a className="scroll-cue" href="#portfolio">Continue explorando<ArrowDown className="size-4"/></a></section>
   <div className="skill-band"><div className="container-wide skill-list"><span>Design gráfico</span><Asterisk/><span>Social media</span><Asterisk/><span>Web design</span><Asterisk/><span>Criatividade & estratégia</span><Asterisk className="last-star"/></div></div>
   <section className="section container-wide" id="portfolio"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="eyebrow">Portfólio selecionado</div><h2 className="section-title">Ideias que ganham<br/><em>forma. E presença.</em></h2></div><p className="section-lead">Cada projeto, uma nova perspectiva.<br/>Um olhar criativo para histórias, marcas e conexões que merecem destaque.</p></div><div className="portfolio-tabs" role="group" aria-label="Filtrar portfólio">{['Todos','Social media','IA','Canva','Branding','Websites','Vídeo'].map(f=><Button key={f} variant={filter===f?'default':'outline'} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</Button>)}</div><div className="portfolio-grid">{visible.map(p=><Tooltip key={p.id}><TooltipTrigger asChild><Button className="project-button" variant="ghost" onClick={()=>setSelected(p.id)} aria-label={`${p.video?'Assistir':'Ampliar'} ${p.title}`}><ProjectArt p={p}/><div className="project-caption"><h3>{p.title}</h3><span>{p.category} ↗</span></div></Button></TooltipTrigger><TooltipContent>{p.title} · {p.category} · {p.video?'Assistir':'Ampliar'}</TooltipContent></Tooltip>)}</div><div className="portfolio-note"><ImageIcon className="size-3"/>Alguns dos projetos criados para marcas e clientes.</div></section>
   <section className="section about-section" id="sobre"><div className="container-wide about-grid"><div className="portrait-wrap"><img src={portrait.url} className="portrait" alt="Renan Carvalho, designer gráfico" loading="lazy" width={768} height={960}/><div className="portrait-label"><strong>15+</strong><span>anos de experiência<br/>em design gráfico</span></div></div><div className="about-copy"><div className="eyebrow">O olhar por trás do design</div><h2 className="section-title">Muito prazer,<br/><em>Renan Carvalho.</em></h2><p>Sou designer gráfico e, há mais de 15 anos, transformo ideias em comunicação visual. Minha trajetória é movida pela criatividade, pela troca e pela vontade de fazer diferente.</p><p>Nos últimos anos, meu foco tem sido criar conteúdos para Instagram e Facebook: posts, anúncios e stories que conectam marcas e pessoas.</p><p>Acredito que os melhores projetos nascem da colaboração. Seu conhecimento sobre a sua marca, junto ao meu olhar criativo, é o ponto de partida para construir algo único.</p><div className="about-signature">Renan Carvalho<span className="ml-3 text-primary">↗</span></div><Button asChild variant="link" className="mt-5 p-0 text-xs"><a href={portfolio.url} target="_blank" rel="noopener noreferrer">Conheça meu portfólio completo<ArrowUpRight/></a></Button></div></div></section>
   <section className="section container-wide" id="servicos"><div className="flex flex-col justify-between md:flex-row md:items-end"><div><div className="eyebrow">Como posso ajudar</div><h2 className="section-title">Design para a sua<br/><em>próxima fase.</em></h2></div><p className="section-lead">Do primeiro contato ao último detalhe,<br/>um olhar dedicado à sua comunicação.</p></div><div className="service-grid">{[{Icon:Palette,title:'Design gráfico',text:'Peças visuais que traduzem a essência da sua marca, com atenção à composição, à tipografia e aos detalhes.'},{Icon:Sparkles,title:'Social media',text:'Posts, stories e criativos para anúncios no Instagram e Facebook. Sua comunicação com consistência e personalidade.'},{Icon:Monitor,title:'Web design',text:'Páginas e experiências visuais que apresentam seu negócio, valorizam sua marca e facilitam a conexão com seu público.'}].map(({Icon,title,text},i)=><article className="service" key={title}><div className="flex items-center justify-between"><Icon/><span className="text-xs text-muted-foreground">0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
   <section className="contact-section" id="contato"><img className="hero-image" src={hero} alt="" loading="lazy" width={1920} height={1088}/><div className="container-wide contact-content"><div className="eyebrow">Seu próximo projeto começa aqui</div><h2 className="section-title contact-title">Vamos dar uma nova<br/><em>perspectiva à sua marca?</em></h2><p className="section-lead mt-6">Me conte sua ideia. Vamos construir juntos<br/>uma presença visual à altura da sua marca.</p><div className="mt-8"><ContactButton label="Conversar sobre meu projeto"/></div><div className="contact-links"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-3.5"/>(16) 99742-0925</a><a href="mailto:design.renancarvalho@gmail.com"><Mail className="size-3.5"/>design.renancarvalho@gmail.com</a><a href="https://www.instagram.com/designer.renan/" target="_blank" rel="noopener noreferrer"><Instagram className="size-3.5"/>@designer.renan</a></div></div></section>
  </main><footer className="site-footer"><div className="container-wide flex items-center justify-between gap-6"><span>© 2026 Renan Carvalho. Todos os direitos reservados.</span><span>Feito de ideias. Movido por criatividade.</span><a href="#inicio" className="flex items-center gap-2">Voltar ao topo<ArrowUpRight className="size-3"/></a></div></footer>
  <Dialog.Root open={selected!==null} onOpenChange={open=>{if(!open)setSelected(null);}}><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 lightbox-overlay"/><Dialog.Content className="lightbox-content">{active&&<><ProjectArt p={active} playing={!!active.video}/><Dialog.Title className="lightbox-title">{active.title} <span className="text-muted-foreground">/ {active.category}</span></Dialog.Title><Dialog.Description className="lightbox-description">{active.category} · {visible.findIndex(p=>p.id===active.id)+1} de {visible.length}.</Dialog.Description></>}<Dialog.Close asChild><Button variant="outline" size="icon" className="lightbox-close" aria-label="Fechar imagem"><X/></Button></Dialog.Close><Button variant="outline" size="icon" className="lightbox-nav lightbox-prev" aria-label="Projeto anterior" onClick={()=>move(-1)}><ArrowLeft/></Button><Button variant="outline" size="icon" className="lightbox-nav lightbox-next" aria-label="Próximo projeto" onClick={()=>move(1)}><ArrowRight/></Button></Dialog.Content></Dialog.Portal></Dialog.Root>
 </TooltipProvider>;
}
