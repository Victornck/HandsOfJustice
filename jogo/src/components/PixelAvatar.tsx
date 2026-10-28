import type { Avatar } from '../types/game'

interface PixelAvatarProps {
  avatar: Avatar
  large?: boolean
}

export default function PixelAvatar({
  avatar,
  large = false,
}: PixelAvatarProps) {
  const isPedro = avatar.id === 1
  const isJoao = avatar.id === 2
  const isMaria = avatar.id === 3
  const isJulia = avatar.id === 4

  // Cor da pele definida individualmente para cada personagem.
  const skinColor = isMaria ? '#F5D0A9' : avatar.skin

  const hairColor = avatar.hair
  const hairDetailColor = avatar.hairDetail
  const shirtColor = avatar.shirt
  const accentColor = avatar.accent
  const pantsColor = avatar.pants

  return (
    <svg
      viewBox="0 0 128 144"
      className={`h-full w-full ${large ? 'scale-110' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      role="img"
      aria-label={`Avatar de ${avatar.name}`}
    >
      {/* Sombra */}
      <rect x="34" y="132" width="60" height="4" fill="#000000" opacity="0.25" />

      {/* Cabelo atrás da cabeça */}
      {isMaria ? (
        <>
          <rect x="39" y="22" width="50" height="42" fill={hairColor} />
          <rect x="35" y="31" width="8" height="30" fill={hairColor} />
          <rect x="85" y="31" width="8" height="30" fill={hairColor} />
          <rect x="43" y="18" width="38" height="8" fill={hairColor} />
          <rect x="47" y="14" width="27" height="5" fill={hairDetailColor} />
          <rect x="35" y="48" width="8" height="15" fill={hairColor} />
          <rect x="85" y="48" width="8" height="15" fill={hairColor} />
        </>
      ) : (
        <>
          <rect x="42" y="22" width="44" height="39" fill={hairColor} />
          <rect x="38" y="30" width="8" height="28" fill={hairColor} />
          <rect x="82" y="30" width="8" height="28" fill={hairColor} />
          <rect x="46" y="17" width="35" height="8" fill={hairColor} />
          <rect x="49" y="14" width="25" height="4" fill={hairDetailColor} />
        </>
      )}

      {/* Orelhas */}
      <rect x="37" y="43" width="8" height="12" fill={skinColor} />
      <rect x="83" y="43" width="8" height="12" fill={skinColor} />

      {/* Pescoço */}
      <rect x="53" y="63" width="22" height="15" fill={skinColor} />

      {/* Rosto */}
      <rect x="43" y="27" width="42" height="37" fill={skinColor} />
      <rect x="47" y="23" width="34" height="5" fill={skinColor} />

      {/* Franja */}
      {isMaria ? (
        <>
          <rect x="43" y="23" width="38" height="7" fill={hairColor} />
          <rect x="39" y="27" width="12" height="10" fill={hairColor} />
          <rect x="47" y="30" width="8" height="7" fill={hairColor} />
          <rect x="62" y="25" width="8" height="5" fill={hairDetailColor} />
        </>
      ) : isJulia ? (
        <>
          <rect x="43" y="23" width="38" height="7" fill={hairColor} />
          <rect x="47" y="30" width="8" height="5" fill={hairColor} />
          <rect x="70" y="26" width="12" height="7" fill={hairDetailColor} />
        </>
      ) : (
        <>
          <rect x="43" y="23" width="38" height="7" fill={hairColor} />
          <rect x="47" y="30" width="12" height="5" fill={hairColor} />
          <rect x="66" y="25" width="12" height="5" fill={hairDetailColor} />
        </>
      )}

      {/* Olhos */}
      <rect x="50" y="42" width="6" height="5" fill="#F5F0E6" />
      <rect x="72" y="42" width="6" height="5" fill="#F5F0E6" />
      <rect x="52" y="43" width="3" height="4" fill="#292720" />
      <rect x="73" y="43" width="3" height="4" fill="#292720" />

      {/* Sobrancelhas */}
      <rect x="49" y="38" width="9" height="3" fill={hairColor} />
      <rect x="71" y="38" width="9" height="3" fill={hairColor} />

      {/* Nariz */}
      <rect x="62" y="46" width="5" height="5" fill={skinColor} opacity="0.8" />

      {/* Boca */}
      <rect x="57" y="55" width="14" height="3" fill="#75483D" />
      <rect x="60" y="58" width="8" height="2" fill="#75483D" />

      {/* Detalhes do cabelo */}
      <rect x="47" y="19" width="17" height="3" fill={hairDetailColor} />
      <rect x="70" y="21" width="8" height="3" fill={hairDetailColor} />

      {/* Braços */}
      <rect x="28" y="78" width="14" height="36" fill={shirtColor} />
      <rect x="86" y="78" width="14" height="36" fill={shirtColor} />

      {/* Mangas */}
      <rect x="25" y="81" width="17" height="12" fill={shirtColor} />
      <rect x="86" y="81" width="17" height="12" fill={shirtColor} />

      {/* Mãos */}
      <rect x="29" y="111" width="12" height="10" fill={skinColor} />
      <rect x="87" y="111" width="12" height="10" fill={skinColor} />

      {/* Tronco */}
      <rect x="40" y="74" width="48" height="40" fill={shirtColor} />

      {/* Detalhes da roupa */}
      <rect x="59" y="74" width="10" height="40" fill={accentColor} />
      <rect x="54" y="74" width="20" height="6" fill={shirtColor} />
      <rect x="59" y="80" width="10" height="28" fill="#E7E8DD" />
      <rect x="62" y="80" width="4" height="28" fill="#242820" />

      {/* Cinto */}
      <rect x="40" y="110" width="48" height="5" fill="#242820" />
      <rect x="60" y="110" width="8" height="5" fill="#B5F33B" />

      {/* Calças */}
      <rect x="43" y="115" width="18" height="15" fill={pantsColor} />
      <rect x="67" y="115" width="18" height="15" fill={pantsColor} />

      {/* Separação das pernas */}
      <rect x="61" y="115" width="6" height="15" fill="#12140F" />

      {/* Sapatos */}
      <rect x="38" y="128" width="25" height="6" fill="#242820" />
      <rect x="65" y="128" width="25" height="6" fill="#242820" />
      <rect x="38" y="128" width="25" height="2" fill={accentColor} />
      <rect x="65" y="128" width="25" height="2" fill={accentColor} />

      {/* Detalhes exclusivos da Maria */}
      {isMaria && (
        <>
          <rect x="35" y="58" width="8" height="8" fill={hairColor} />
          <rect x="85" y="58" width="8" height="8" fill={hairColor} />
          <rect x="45" y="34" width="5" height="7" fill={hairColor} />
        </>
      )}

      {/* Detalhes exclusivos do Pedro */}
      {isPedro && (
        <>
          <rect x="46" y="16" width="15" height="4" fill={hairDetailColor} />
          <rect x="75" y="25" width="7" height="5" fill={hairDetailColor} />
        </>
      )}

      {/* Detalhes exclusivos do João */}
      {isJoao && (
        <>
          <rect x="42" y="25" width="8" height="5" fill={hairDetailColor} />
          <rect x="76" y="21" width="7" height="5" fill={hairDetailColor} />
        </>
      )}

      {/* Detalhes exclusivos da Júlia */}
      {isJulia && (
        <>
          <rect x="42" y="32" width="8" height="8" fill={hairColor} />
          <rect x="78" y="26" width="7" height="8" fill={hairDetailColor} />
        </>
      )}
    </svg>
  )
}