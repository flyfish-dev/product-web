# Office Preview Design QA

## Reference

- Reference: annotated 2048px desktop design review.
- Scope: first-screen spacing, capability bar rhythm, and Office format icon treatment.

## Acceptance

- Desktop 2048 x 920: hero content and preview stage use balanced vertical spacing; the capability bar no longer touches the section boundary; the next section remains visible without crowding the fold.
- Desktop 1280 x 720: no horizontal overflow, clipped labels, or missing preview images.
- Mobile 390 x 844: no horizontal overflow; the next-section heading is visible at the fold; format cards retain a two-column layout with complete labels.
- Format icons: Lucide document icons use restrained Word, PowerPoint, and Excel product colors on consistent solid icon tiles.
- Runtime: no browser warnings or errors during responsive checks.
- Navigation clearance: the hero reads the fixed navigation's measured bottom edge through `ResizeObserver`; verified gaps are 50px at 1400 x 988, 94px at the 940px breakpoint, and 66px at 390 x 844.
- Chinese contact: customer WeChat and official-account QR cards use the same source assets as `file-viewer.app`; both images load and remain inside the contact panel.
- English contact: WhatsApp and Telegram links match the current `file-viewer.app` configuration and open in new tabs.
- Enterprise email: `admin@flyfish.dev` is labeled for both pre-sales and after-sales support in both locales.

## Result

Passed. No P0, P1, or P2 visual issues remain in the reviewed scope.
