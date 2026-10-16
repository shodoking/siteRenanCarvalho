<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep the portfolio landing page and its gallery state in the index route, with semantic presentation rules in the global stylesheet, so the single-page experience remains cohesive.
- Use asset pointers for uploaded brand media and document downloads, while generated artwork uses bundled imports, to preserve original uploads without adding large binaries.
- Use Radix Dialog and Tooltip with the shared Button for gallery interaction, so keyboard navigation and accessible modal behavior remain consistent.
- Gallery items are uniform 3:4 thumbnails; a project may also carry a video source, shown as its poster thumbnail in the grid and as a native player in the lightbox, so mixed media never breaks the grid rhythm.
