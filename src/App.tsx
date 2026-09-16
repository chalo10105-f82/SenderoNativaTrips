const assetPathPrefix = "/assets";

const imgEllipse = `${assetPathPrefix}/451b8.svg`;
const imgArrowUpRight = `${assetPathPrefix}/29c16.svg`;
const imgMainHeroPhoto = `${assetPathPrefix}/2d806.png`;
const imgThumb0 = `${assetPathPrefix}/fcbe7.png`;
const imgThumb1 = `${assetPathPrefix}/fe7e4.png`;
const imgThumb2 = `${assetPathPrefix}/25b92.png`;
const imgThumb3 = `${assetPathPrefix}/e14e0.png`;
const imgGauge = `${assetPathPrefix}/51a8f.svg`;
const imgClock = `${assetPathPrefix}/f32a5.svg`;
const imgActivity = `${assetPathPrefix}/cd7c2.svg`;
const imgMapPlaceholderImage = `${assetPathPrefix}/12270.png`;
const imgFileText = `${assetPathPrefix}/0c93a.svg`;
const imgUser = `${assetPathPrefix}/bf640.svg`;
const imgActivityReq = `${assetPathPrefix}/84c82.svg`;
const imgSun = `${assetPathPrefix}/0bea6.svg`;
const imgDroplet = `${assetPathPrefix}/71c70.svg`;
const imgShoppingBag = `${assetPathPrefix}/78e2a.svg`;
const imgSlash = `${assetPathPrefix}/c731b.svg`;
const imgCompass = `${assetPathPrefix}/2f6f4.svg`;
const imgCardImage0 = `${assetPathPrefix}/4c872.png`;
const imgCardImage1 = `${assetPathPrefix}/573c7.png`;
const imgCardImage2 = `${assetPathPrefix}/a9784.png`;
const imgCardImage3 = `${assetPathPrefix}/dd078.png`;
const imgMail = `${assetPathPrefix}/eac85.svg`;
const imgPhone = `${assetPathPrefix}/f8d97.svg`;

export default function App() {
  return (
    <div className="w-full min-h-dvh bg-[#f5f0e8]">

      {/* Header Navigation */}
      <header className="bg-white border-b border-[#eae5da] flex items-center justify-between px-[80px] py-[24px]">
        <div className="flex gap-[8px] items-center shrink-0">
          <div className="relative shrink-0 size-[12px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
          </div>
          <p className="font-['Inter:Black'] font-black leading-normal not-italic text-[#13201a] text-[22px] whitespace-nowrap">
            NativaTrips
          </p>
        </div>
        <nav className="flex gap-[32px] items-center text-[15px] leading-normal not-italic whitespace-nowrap">
          <a href="#" className="font-['Inter:Medium'] font-medium text-[#6b7566] hover:text-[#13201a] transition-colors">Inicio</a>
          <a href="#" className="font-['Inter:Extra_Bold'] font-extrabold text-[#13201a]">Senderos</a>
          <a href="#" className="font-['Inter:Medium'] font-medium text-[#6b7566] hover:text-[#13201a] transition-colors">Experiencias</a>
          <a href="#" className="font-['Inter:Medium'] font-medium text-[#6b7566] hover:text-[#13201a] transition-colors">Nosotros</a>
          <a href="#" className="font-['Inter:Medium'] font-medium text-[#6b7566] hover:text-[#13201a] transition-colors">Contacto</a>
        </nav>
        <button className="bg-[#dceb6b] flex gap-[8px] items-center justify-center px-[24px] py-[12px] rounded-[999px] shrink-0 cursor-pointer hover:brightness-95 transition-all">
          <p className="font-['Inter:Bold'] font-bold leading-normal not-italic text-[#080f0c] text-[16px] whitespace-nowrap">
            Reservar ahora
          </p>
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
          </div>
        </button>
      </header>

      {/* Breadcrumbs */}
      <div className="flex gap-[8px] items-start px-[80px] py-[16px] text-[13px] leading-normal not-italic whitespace-nowrap">
        <p className="font-['Inter:Medium'] font-medium text-[#6b7566]">Inicio</p>
        <p className="font-['Inter:Medium'] font-medium text-[#6b7566]">{`>`}</p>
        <p className="font-['Inter:Medium'] font-medium text-[#6b7566]">Senderos</p>
        <p className="font-['Inter:Medium'] font-medium text-[#6b7566]">{`>`}</p>
        <p className="font-['Inter:Bold'] font-bold text-[#13201a]">Lagunas de Siecha</p>
      </div>

      {/* Hero Photo Gallery */}
      <div className="flex flex-col gap-[16px] items-start pb-[48px] px-[80px]">
        <div className="h-[480px] relative rounded-[24px] w-full overflow-hidden">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgMainHeroPhoto} />
        </div>
        <div className="flex gap-[16px] items-start w-full">
          {[imgThumb0, imgThumb1, imgThumb2, imgThumb3].map((src, i) => (
            <div key={i} className="flex-[1_0_0] h-[140px] relative rounded-[16px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={src} />
            </div>
          ))}
        </div>
      </div>

      {/* Trail Header Info */}
      <div className="flex flex-col gap-[32px] items-start pb-[64px] px-[80px]">
        <div className="flex flex-col gap-[16px] items-start w-full not-italic">
          <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal text-[#13201a] text-[12px] uppercase w-full">
            SECTOR SIECHA · PNN CHINGAZA
          </p>
          <p className="font-['Inter:Black'] font-black leading-[1.05] text-[#080f0c] text-[56px] w-full">
            Sendero Lagunas de Siecha
          </p>
        </div>
        <div className="flex gap-[40px] items-start w-full">
          {[
            { icon: imgGauge, label: "​", value: "Moderado" },
            { icon: imgClock, label: "​", value: "5 Horas" },
            { icon: imgActivity, label: "​", value: "10 Kilómetros" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-[1_0_0] gap-[16px] items-center min-w-0">
              <div className="bg-[#dceb6b] flex items-center justify-center rounded-[24px] shrink-0 size-[48px]">
                <div className="relative shrink-0 size-[20px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={stat.icon} />
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start leading-normal not-italic min-w-0">
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#6b7566] text-[12px] uppercase w-full">{stat.label}</p>
                <p className="font-['Inter:Bold'] font-bold text-[#080f0c] text-[18px] w-full">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-['Inter:Regular'] font-normal leading-[1.6] not-italic text-[#080f0c] text-[20px] max-w-[880px]">
          Recorre el camino ancestral muisca hasta las tres lagunas sagradas de Siecha, rodeadas de frailejones centenarios y paisajes de páramo a más de 3,500 metros de altitud. Una experiencia de conexión profunda con la naturaleza y la historia precolombina de los Andes.
        </p>
      </div>

      {/* Trail Map and Elevation Section */}
      <div className="flex flex-col items-start pb-[80px] px-[80px]">
        <div className="flex gap-[32px] items-start w-full">
          {/* Map Card */}
          <div className="bg-white flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-0 p-[32px] rounded-[28px] self-stretch">
            <div className="flex flex-col gap-[4px] items-start leading-normal not-italic w-full whitespace-nowrap">
              <p className="font-['Inter:Bold'] font-bold text-[#6b7566] text-[12px]">SITUACIÓN GEOGRÁFICA</p>
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#080f0c] text-[22px]">Ruta de la Caminata</p>
            </div>
            <div className="h-[260px] relative rounded-[16px] w-full overflow-hidden">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgMapPlaceholderImage} />
            </div>
          </div>
          {/* Elevation Card */}
          <div className="bg-white flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-0 p-[32px] rounded-[28px] self-stretch">
            <div className="flex flex-col gap-[4px] items-start leading-normal not-italic w-full whitespace-nowrap">
              <p className="font-['Inter:Bold'] font-bold text-[#6b7566] text-[12px]">ALTITUD MÁXIMA 3,680M</p>
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#080f0c] text-[22px]">Perfil de Elevación</p>
            </div>
            <div className="flex flex-col h-[200px] items-start w-full">
              <div className="flex flex-1 items-end justify-between min-h-0 pb-[12px] w-full">
                {[
                  { label: "3,100m", height: 40, color: "#13201a", name: "Inicio" },
                  { label: "3,420m", height: 100, color: "#13201a", name: "L. Guasca" },
                  { label: "3,560m", height: 130, color: "#13201a", name: "L. Siecha" },
                  { label: "3,680m", height: 160, color: "#e05a36", name: "Mirador" },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col gap-[4px] items-center shrink-0">
                    <p className="font-['Inter:Bold'] font-bold leading-normal not-italic whitespace-nowrap" style={{ color: bar.color, fontSize: 11 }}>{bar.label}</p>
                    <div className="relative rounded-[4px] shrink-0 w-[20px]" style={{ height: bar.height, backgroundColor: bar.color }} />
                    <p className="font-['Inter:Semi_Bold'] font-semibold leading-normal not-italic text-[#080f0c] whitespace-nowrap" style={{ fontSize: 11 }}>{bar.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-['Inter:Medium'] font-medium leading-[1.4] not-italic text-[#6b7566] text-[14px] w-full">
              Desnivel positivo acumulado de aprox. 580 metros. Ascenso sostenido en ambiente de alta montaña.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-white border-y border-[#eae5da] flex flex-col gap-[48px] items-start p-[80px]">
        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold gap-[12px] items-start not-italic w-full">
          <p className="leading-normal text-[#13201a] text-[12px] uppercase w-full">ANTES DE TU VISITA</p>
          <p className="leading-[1.1] text-[#080f0c] text-[40px] w-full">Requisitos de ingreso</p>
        </div>
        <div className="grid grid-cols-2 gap-x-[32px] gap-y-[80px] w-full">
          {[
            { icon: imgFileText, text: "Registro previo en el sistema de PNN (OBLIGATORIO)" },
            { icon: imgUser, text: "Acompañamiento de guía autorizado de la comunidad" },
            { icon: imgActivityReq, text: "Ropa de montaña, botas de agarre e impermeable térmico" },
            { icon: imgSun, text: "Protector solar ecológico, gorra y gafas con filtro UV" },
            { icon: imgDroplet, text: "Mínimo 2 litros de agua por persona en termo reutilizable" },
            { icon: imgShoppingBag, text: "Snacks energéticos (frutos secos, chocolate). Cocinar prohibido" },
            { icon: imgSlash, text: "No se permite el ingreso de mascotas de ninguna especie" },
            { icon: imgCompass, text: "Respetar estrictamente los senderos demarcados del parque" },
          ].map((item, i) => (
            <div key={i} className="flex gap-[16px] items-center">
              <div className="bg-[#dceb6b] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={item.icon} />
                </div>
              </div>
              <p className="font-['Inter:Medium'] font-medium leading-[1.4] not-italic text-[#080f0c] text-[16px] flex-1 min-w-0">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Flora and Fauna Section */}
      <div className="flex flex-col gap-[48px] items-start p-[80px]">
        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold gap-[12px] items-start not-italic w-full">
          <p className="leading-normal text-[#13201a] text-[12px] uppercase w-full">FLORA Y FAUNA</p>
          <p className="leading-[1.1] text-[#080f0c] text-[40px] w-full">Qué verás en el camino</p>
        </div>
        <div className="grid grid-cols-4 gap-[24px] w-full">
          {[
            { img: imgCardImage0, title: "Frailejones centenarios", desc: "Espeletia, plantas emblemáticas del páramo que crecen tan solo 1cm por año." },
            { img: imgCardImage1, title: "Venado cola blanca", desc: "Avistamientos frecuentes de fauna andina nativa en las primeras horas de la mañana." },
            { img: imgCardImage2, title: "Lagunas glaciares", desc: "Tres lagunas sagradas de origen glaciar cargadas de misticismo y leyendas antiguas." },
            { img: imgCardImage3, title: "Colibrí de páramo", desc: "Especies endémicas de aves de alta montaña perfectamente adaptadas al frío." },
          ].map((card, i) => (
            <div key={i} className="bg-white flex flex-col gap-[20px] items-start p-[24px] rounded-[24px]">
              <div className="h-[240px] relative rounded-[16px] w-full overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={card.img} />
              </div>
              <div className="flex flex-col gap-[8px] items-start not-italic w-full">
                <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal text-[#080f0c] text-[22px] w-full">{card.title}</p>
                <p className="font-['Inter:Medium'] font-medium leading-[1.4] text-[#6b7566] text-[15px] w-full">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Dates Section */}
      <div className="bg-white border-y border-[#eae5da] flex flex-col gap-[48px] items-start p-[80px]">
        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold gap-[12px] items-start not-italic w-full">
          <p className="leading-normal text-[#13201a] text-[12px] uppercase w-full">AGENDA TU VISITA</p>
          <p className="leading-[1.1] text-[#080f0c] text-[40px] w-full">Próximas fechas disponibles</p>
        </div>
        <div className="grid grid-cols-4 gap-[24px] w-full">
          {[
            { date: "Sáb 14 Dic 2025", badge: "6 cupos disponibles", badgeBg: "rgba(19,32,26,0.06)", badgeColor: "#13201a", urgent: false },
            { date: "Dom 15 Dic 2025", badge: "Últimos 2 cupos", badgeBg: "rgba(224,90,54,0.13)", badgeColor: "#e05a36", urgent: true },
            { date: "Sáb 21 Dic 2025", badge: "10 cupos disponibles", badgeBg: "rgba(19,32,26,0.06)", badgeColor: "#13201a", urgent: false },
            { date: "Sáb 28 Dic 2025", badge: "8 cupos disponibles", badgeBg: "rgba(19,32,26,0.06)", badgeColor: "#13201a", urgent: false },
          ].map((item, i) => (
            <div key={i} className="bg-white flex flex-col gap-[24px] items-start p-[32px] rounded-[24px]">
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal not-italic text-[#080f0c] text-[20px]">{item.date}</p>
                <div className="flex items-start px-[12px] py-[6px] rounded-[20px]" style={{ backgroundColor: item.badgeBg }}>
                  <p className="font-['Inter:Bold'] font-bold leading-normal not-italic text-[12px] whitespace-nowrap" style={{ color: item.badgeColor }}>{item.badge}</p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start leading-normal not-italic w-full">
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#6b7566] text-[11px] uppercase w-full">PRECIO POR PERSONA</p>
                <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#080f0c] text-[18px] w-full">$185.000 COP</p>
              </div>
              <button className="bg-[#dceb6b] flex gap-[8px] items-center justify-center px-[24px] py-[12px] rounded-[999px] shrink-0 cursor-pointer hover:brightness-95 transition-all">
                <p className="font-['Inter:Bold'] font-bold leading-normal not-italic text-[#080f0c] text-[16px] whitespace-nowrap">Reservar</p>
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-[#13201a] flex flex-col gap-[48px] items-start not-italic p-[80px]">
        <div className="flex flex-col font-['Inter:Extra_Bold'] font-extrabold gap-[12px] items-start w-full">
          <p className="leading-normal text-[#dceb6b] text-[12px] uppercase w-full">TIPS DE VIAJE</p>
          <p className="leading-[1.1] text-white text-[40px] w-full">Recomendaciones para tu caminata</p>
        </div>
        <div className="flex gap-[48px] items-start w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-0">
            {[
              { num: "01", title: "Llega con anticipación", desc: "Punto de encuentro: Entrada sector Siecha, 30 minutos antes de la hora acordada para el registro oficial con guardaparques." },
              { num: "02", title: "Proceso de aclimatación", desc: "Camina a paso constante y pausado. Si sientes mareo o dolor de cabeza, avisa de inmediato a tu guía de montaña." },
            ].map((item, i) => (
              <div key={i} className="flex gap-[20px] items-start w-full">
                <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal text-[#dceb6b] text-[24px] w-[32px] shrink-0">{item.num}</p>
                <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0">
                  <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal text-white text-[18px] w-full">{item.title}</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.4] text-[rgba(255,255,255,0.8)] text-[15px] w-full">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-0">
            {[
              { num: "03", title: "No dejes rastro", desc: "Regresa a la ciudad con todos los empaques, botellas y residuos. Mantengamos el páramo completamente libre de basura." },
              { num: "04", title: "Efectivo en mano", desc: "Lleva dinero en efectivo para pagos de peaje local, parqueadero o consumos extras en la comunidad campesina local." },
            ].map((item, i) => (
              <div key={i} className="flex gap-[20px] items-start w-full">
                <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal text-[#dceb6b] text-[24px] w-[32px] shrink-0">{item.num}</p>
                <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-0">
                  <p className="font-['Inter:Extra_Bold'] font-extrabold leading-normal text-white text-[18px] w-full">{item.title}</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.4] text-[rgba(255,255,255,0.8)] text-[15px] w-full">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#13201a] border-t border-[#1e2f26] flex flex-col gap-[40px] items-center px-[80px] py-[120px]">
        <div className="flex flex-col gap-[16px] items-center not-italic text-center w-full">
          <p className="font-['Inter:Black'] font-black leading-[1.05] text-white text-[56px]">
            Vive la experiencia Chingaza
          </p>
          <p className="font-['Inter:Medium'] font-medium leading-[1.5] text-[rgba(255,255,255,0.63)] text-[20px] max-w-[720px]">
            Únete a nuestras caminatas conscientes lideradas por guías locales. Tu visita apoya directamente la conservación de este ecosistema y el bienestar de las comunidades rurales.
          </p>
        </div>
        <button className="bg-[#dceb6b] flex gap-[8px] items-center justify-center px-[24px] py-[12px] rounded-[999px] shrink-0 cursor-pointer hover:brightness-95 transition-all">
          <p className="font-['Inter:Bold'] font-bold leading-normal not-italic text-[#080f0c] text-[16px] whitespace-nowrap">
            Reservar este sendero
          </p>
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
          </div>
        </button>
        <div className="flex gap-[32px] items-center pt-[24px]">
          <div className="flex gap-[8px] items-center shrink-0">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMail} />
            </div>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-normal not-italic text-[14px] text-white whitespace-nowrap">
              contacto@nativatrips.com
            </p>
          </div>
          <div className="flex gap-[8px] items-center shrink-0">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhone} />
            </div>
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-normal not-italic text-[14px] text-white whitespace-nowrap">
              +57 (312) 456-7890
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
