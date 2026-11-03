// Drop an illustrated portrait at src/assets/avatar.png (or .webp/.jpg) and it replaces the drawing below.
const found = import.meta.glob('../assets/avatar.{png,webp,jpg}', { eager: true, import: 'default' })
const portrait = Object.values(found)[0]

const INK = '#17140F'
const SKIN = '#C98B5E'
const SKIN_SHADE = '#B27649'
const BLAZER = '#F4EEE4'

/** Flat illustrated portrait, drawn in the style of the reference: ink outlines, flat fills. */
export default function Avatar() {
  if (portrait) return <img className="avatar" src={portrait} alt="Neel" />
  const line = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round', strokeLinecap: 'round' }
  return (
    <svg className="avatar" viewBox="0 0 300 360" role="img" aria-label="Illustration of Neel: quiff, sunglasses, cream blazer, hands in pockets">
      <circle cx="150" cy="190" r="140" fill="var(--orange)" opacity="0.14" />

      {/* arms + torso */}
      <path d="M44 360 L52 268 Q58 236 100 226 L200 226 Q242 236 248 268 L256 360 Z" fill={BLAZER} {...line} />
      <path d="M100 226 L150 304 L200 226 Q150 212 100 226 Z" fill={INK} {...line} />
      <path d="M100 226 L132 290 L112 330 L84 300 Z M200 226 L168 290 L188 330 L216 300 Z" fill={BLAZER} {...line} />
      <path d="M150 304 L150 360" {...line} fill="none" />
      <circle cx="150" cy="322" r="3.5" fill={INK} />

      {/* orange pocket square */}
      <path d="M182 300 L206 296 L204 312 L184 314 Z" fill="var(--orange)" {...line} strokeWidth="2.5" />

      {/* arms down into pockets */}
      <path d="M52 268 Q36 316 56 360 L92 360 Q78 316 90 274" fill={BLAZER} {...line} />
      <path d="M248 268 Q264 316 244 360 L208 360 Q222 316 210 274" fill={BLAZER} {...line} />
      <path d="M70 322 Q92 312 112 326" fill="none" {...line} />
      <path d="M230 322 Q208 312 188 326" fill="none" {...line} />
      <path d="M96 326 Q112 318 124 334 L124 348 L96 348 Z" fill={SKIN} {...line} />
      <path d="M204 326 Q188 318 176 334 L176 348 L204 348 Z" fill={SKIN} {...line} />

      {/* watch */}
      <rect x="224" y="290" width="22" height="9" rx="3" fill="#C7CCD4" {...line} strokeWidth="2.5" transform="rotate(8 235 294)" />

      {/* neck */}
      <path d="M130 186 L130 232 Q150 246 170 232 L170 186 Z" fill={SKIN_SHADE} {...line} />

      {/* ears */}
      <circle cx="98" cy="146" r="11" fill={SKIN} {...line} />
      <circle cx="202" cy="146" r="11" fill={SKIN} {...line} />

      {/* head */}
      <path d="M98 128 Q98 82 150 82 Q202 82 202 128 L202 152 Q200 200 150 206 Q100 200 98 152 Z" fill={SKIN} {...line} />

      {/* hair: swept quiff */}
      <path d="M96 134 Q86 86 124 62 Q142 34 184 52 Q222 66 210 118 Q206 130 204 138 Q198 112 180 102 Q146 94 118 108 Q102 116 96 134 Z" fill={INK} {...line} />
      <path d="M126 66 Q150 50 182 60" fill="none" stroke="#4A433B" strokeWidth="3" strokeLinecap="round" />

      {/* sunglasses */}
      <rect x="106" y="128" width="38" height="25" rx="9" fill={INK} {...line} />
      <rect x="156" y="128" width="38" height="25" rx="9" fill={INK} {...line} />
      <path d="M144 138 Q150 133 156 138" fill="none" {...line} />
      <path d="M100 134 L106 136 M200 134 L194 136" {...line} />
      <path d="M114 134 L124 134 M164 134 L174 134" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />

      {/* nose + smile */}
      <path d="M150 156 Q144 170 152 172" fill="none" stroke={SKIN_SHADE} strokeWidth="3" strokeLinecap="round" />
      <path d="M126 178 Q150 200 176 178 Q150 184 126 178 Z" fill="#fff" {...line} strokeWidth="2.5" />
      <path d="M136 172 Q150 168 166 172" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}
