export const locales = ["ko", "en", "zh", "ja"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ko: "KR",
  en: "EN",
  zh: "CN",
  ja: "JP"
};

export const content = {
  ko: {
    meta: {
      title: "ATLY | 한국 브랜드를 위한 겨울 의류 디지털 생산 플랫폼",
      description:
        "서울 ATLY와 항저우 RONDA 생산 허브가 연결하는 고급 패딩, 스키웨어, 캐시미어 코트, 퍼, 구스다운 침구 생산 파트너."
    },
    nav: ["ATLY 소개", "카테고리", "서비스", "문의", "FAQ"],
    hero: {
      eyebrow: "Seoul managed. Hangzhou made. Digitally transparent.",
      title: "겨울 아우터 생산을 더 감각적으로, 더 투명하게.",
      body:
        "서울에서 브랜드의 감도를 이해하고, 항저우 생산 네트워크에서 샘플과 양산을 완성합니다. ATLY는 디자인, 소재, 공정, QC를 한 화면에서 관리하는 겨울 의류 생산 파트너입니다.",
      cta: "카카오 상담",
      secondary: "생산 역량 보기",
      stats: ["13년 고급 의류 생산관리", "30-100장부터 유연 생산", "1:1 전담 MD 품질관리"]
    },
    positioning: {
      title: "ATLY가 브랜드 커뮤니케이션과 품질 기준을 주도합니다.",
      items: [
        ["ATLY Seoul HQ", "한국 브랜드 상담, 디자인 방향, 품질 기준, 고객 응대의 중심"],
        ["Hangzhou Production Center", "ATLY 기준 아래 샘플, 소재 매칭, 대량 생산을 실행하는 생산 허브"],
        ["Digital Control Room", "샘플, 부자재, QC, 물류, 결제 기록을 투명하게 연결"]
      ]
    },
    environment: {
      title: "한눈에 보는 ATLY 작업 환경",
      body: "서울 커뮤니케이션과 항저우의 10명 이상 샘플·생산 스케줄링 전문팀을 연결해, 브랜드가 ATLY의 실제 작업 역량을 한눈에 볼 수 있도록 구성했습니다.",
      items: [
        ["패턴룸", "패턴, 봉제 사양, 디테일 확인이 시작되는 기술 공간", "/assets/environment-pattern-room.jpg"],
        ["샘플룸", "샘플 피팅과 소재 감도를 확인하는 밝은 작업 공간", "/assets/environment-sample-room.jpg"],
        ["오피스", "커뮤니케이션, 일정, 문서와 QC 리포트를 정리하는 운영 공간", "/assets/environment-office.jpg"],
        ["항저우 공장", "중국 항저우에서 샘플과 대량 생산을 연결하는 겨울 의류 생산 네트워크", "/assets/environment-factory.jpg"],
        ["항저우 소재 창고", "원단 롤과 부자재를 가까운 거리에서 확인하고 생산 라인과 빠르게 연결", "/assets/environment-fabric-warehouse.jpg"],
        ["자동 다운 충전", "다운 중량과 충전 균일성을 관리하는 전문 자동 충전 설비", "/assets/environment-auto-down-filling.jpg"],
        ["심실링 공정", "열압착 테이프가 봉제선을 따라 밀착되어 방수 기능을 안정화", "/assets/process-seam-sealing-real.png"],
        ["테크니컬 쉘 생산", "방수·기능성 아우터를 위한 항저우 생산 환경", "/assets/environment-shell-production.jpg"],
        ["30년 경력 패턴사", "숙련된 패턴사가 실물 패턴과 소재를 검토하며 샘플 완성도를 높임", "/assets/environment-master-patternmaker.png"],
        ["항저우 생산 라인", "충전, 압착, 봉제 같은 핵심 공정을 확인하는 중국 항저우 현장", "/assets/environment-production-corner.jpg"]
      ]
    },
    supply: {
      title: "ATLY가 연결하는 겨울 의류 공급망",
      body: "검증된 소재사, 부자재사, 충전재, 봉제 공정, 국제 물류를 하나의 ATLY 기준으로 조율합니다.",
      metrics: [
        ["20Y+", "Winterwear experience"],
        ["2000+", "Premium factory pool"],
        ["500+", "Fabric & trim partners"],
        ["20+", "International logistics partners"]
      ],
      suppliers: ["SAMSUNG DOWN", "TORAY", "Bemberg", "SHINDO", "YKK", "IDEAL", "3M", "LIUQIAO FEATHER", "TEIJIN", "COATS", "NIFCO", "NIKKE TEXTILE", "STYLEM", "SAB", "CONSINEE", "DURAFLEX"],
      brands: ["MUMM", "LACOSTE", "Merehaus", "KARL LAGERFELD", "SSSTUFFF", "GANT", "Rest & Recreation", "AT THE BAGEL", "TOMGIRL", "UNDER STANDING", "HAZZYS", "ELBORN", "COCOON", "PARUR", "KAILAS", "Koradior", "broadcast", "DKNY"],
      supplierTitle: "부자재 / 소재 공급사",
      brandTitle: "협력 브랜드",
      note: "일부 협력 공급사 및 브랜드만 표시했습니다."
    },
    platform: {
      title: "브랜드가 매일 확인하는 생산 워크룸",
      body:
        "PPT의 온라인 커스텀, 주문 확인, 물류 추적 흐름을 현대적인 웹 대시보드 경험으로 재구성했습니다. 브랜드는 샘플부터 대량 생산까지 모든 진행을 한 화면에서 확인합니다.",
      modules: ["오더 타임라인", "샘플 승인", "부자재 업로드", "QC 리포트", "사진/영상 업데이트", "결제 기록", "물류 추적", "문서 센터"]
    },
    craft: {
      title: "패딩과 봉제 공정을 움직이는 방식으로 보여줍니다.",
      body:
        "무봉제 압착, 정밀 충전, 순수 핸드스티칭, 3D 디지털 샘플링을 시각화해 기술성과 장인성을 동시에 전달합니다.",
      tabs: [
        ["Auto Down + Seam Tape", "전문 자동 충전 장비와 압착 테이핑 공정으로 보온성과 기능성을 안정화"],
        ["Hand Stitch", "더블페이스 캐시미어와 퍼를 위한 100% 수공 봉제 디테일"],
        ["3D Pattern Room", "시니어 패턴메이커와 3D 디지털 샘플링으로 디자인 재현율을 높임"]
      ]
    },
    categories: {
      title: "핵심 서비스 제품 소개",
      items: [
        ["다운 재킷", "100장 MOQ", "/assets/product-down-jackets.png", "고밀도 다운프루프 원단, 자동 충전, 방풍 봉제 사양을 브랜드 핏에 맞춰 개발합니다. 샘플부터 대량 생산 QC까지 한 팀처럼 관리합니다."],
        ["테크니컬 쉘", "100장 MOQ", "/assets/product-technical-shells.png", "방수 원단, 심테이프, 지퍼와 스토퍼 같은 기능 부자재를 함께 설계합니다. 활동성과 생산성을 고려한 공정 사양으로 전개합니다."],
        ["스키웨어", "100장 MOQ", "/assets/product-skiwear.png", "보온, 방수, 내구성을 기준으로 패턴과 봉제 구조를 세팅합니다. 컬러 블록, 충전량, 액세서리 사양까지 시즌 기획에 맞춰 조정합니다."],
        ["더블페이스 울", "50장 MOQ", "/assets/product-wool-coats.png", "손바느질 마감과 정교한 패턴 균형으로 고급 코트 라인을 완성합니다. 소량 테스트부터 프리미엄 생산까지 유연하게 대응합니다."],
        ["퍼/시어링", "20장 MOQ", "/assets/product-fur-shearling.png", "소재 결, 두께, 봉제 방향을 고려해 고급 아우터의 실루엣을 안정화합니다. 작은 수량도 브랜드 기준에 맞춰 섬세하게 개발합니다."],
        ["구스다운 침구", "95% goose down", "/assets/goose-duvet.png", "다운 품질, 충전량, 퀼팅 구조를 조율해 균일한 복원력과 촉감을 만듭니다. 원단 선택부터 포장 사양까지 연결해 제안합니다."]
      ]
    },
    advantages: {
      title: "브랜드가 바로 얻는 협업 효과",
      rows: [
        ["고정비", "내부 개발팀 구축 부담", "중한 외부 전문팀 즉시 확보", "최대 40% 절감"],
        ["소싱", "원단/부자재 탐색 장기화", "YKK, RIRI, Primaloft, Allied Down 등 연결", "50% 효율 향상"],
        ["MOQ", "대형 공장 고수량 리스크", "30-100장부터 테스트 생산", "재고 리스크 축소"],
        ["품질", "해외 생산 블랙박스", "4단계 QC와 전담 MD 추적", "고급 품질 안정화"],
        ["응답", "시차와 클레임 지연", "서울 HQ 로컬 응대", "90% 빠른 피드백"]
      ]
    },
    workflow: {
      title: "상담부터 납품까지, 한 팀처럼 움직입니다.",
      steps: ["상담 접수", "디자인/사양 정리", "소재·공장 매칭", "샘플 개발", "대량 생산", "생산 진행 추적", "제품 QC", "물류·통관"]
    },
    app: {
      title: "브랜드가 매일 열어보는 생산 앱",
      pain: "해외 생산에서 가장 큰 불안은 진행 상황, 품질 사진, 결제 기록, 물류 상태가 흩어져 보이지 않는 것입니다.",
      features: [
        ["온라인 커스터마이징", "브랜드가 원하는 카테고리, 디자인 설명, 색상, 사이즈, 부자재, 예상 수량과 납기 조건을 한 화면에서 정리해 샘플 개발 전 누락되는 정보를 줄입니다."],
        ["생산 타임라인", "샘플 개발부터 양산, 공정 피드백, QC, 출고 준비까지 단계별 상태를 시간순으로 확인해 해외 생산의 불확실성을 낮추고 내부 보고를 쉽게 만듭니다."],
        ["문서 관리 센터", "작업지시서, 색상표, 부자재 자료, 수정 기록, 결제 내역과 물류 정보를 주문별로 보관해 담당자가 바뀌어도 동일한 기준으로 업무를 이어갈 수 있습니다."],
        ["서울 로컬 지원", "서울 ATLY 담당자가 앱에 남은 동일한 생산 기록을 기준으로 응대하므로, 고객 문의와 공장 피드백 사이의 오해를 줄이고 의사결정 속도를 높입니다."]
      ]
    },
    network: {
      title: "프리미엄 공급망과 글로벌 브랜드 경험",
      body:
        "TOARY, STYLEM, TEIJIN, SHINDO, BEMBERG, Primaloft, Allied Down, YKK, RIRI 등 고급 소재/부자재 네트워크와 유럽, 북미, 아시아 디자이너 브랜드 운영 경험을 축적했습니다."
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        [
          "샘플 개발 비용은 어떻게 산정되나요?",
          "샘플 개발 비용은 디자인 난이도, 원단 및 부자재 조건, 공정 복잡도에 따라 산정됩니다. 일반적으로 패턴 개발, 공정 분석, 원부자재 확인, 샘플 제작 및 개발 진행 관리가 포함됩니다.\n\n이후 양산 계약으로 이어질 경우 주문 조건에 따라 일부 또는 전액 공제될 수 있으며, 공제 방식은 견적 단계에서 사전에 안내드립니다."
        ],
        [
          "어떤 경우 샘플 비용을 공제받을 수 있나요?",
          "고객이 샘플을 승인하고 동일한 기준으로 양산을 진행하는 경우, 약정 조건에 따라 샘플 비용을 양산 금액에서 공제할 수 있습니다. 예를 들어 합의된 수량을 충족하거나 기존 패턴을 큰 변경 없이 사용하는 경우가 해당됩니다.\n\n샘플 개발 후 주문을 취소하거나 구조가 크게 변경되어 재개발이 필요한 경우에는 샘플 비용이 환불되지 않거나 별도 산정될 수 있습니다."
        ],
        [
          "협업 방식은 어떻게 진행되나요?",
          "01 고객이 디자인 자료를 보유한 경우: 도식화, 작업지시서, 사이즈 스펙, 원부자재 조건을 기준으로 샘플, 견적, 생산, 품질 관리와 출고를 진행합니다.\n\n02 고객이 참고 이미지 또는 방향성만 보유한 경우: 스타일 분석, 공정 분해, 소재 매칭과 샘플 개발을 함께 지원합니다.\n\n03 기획부터 생산까지 필요한 경우: 상품 기획, 소재 제안, 패턴 개발, 샘플 제작과 양산까지 통합적으로 지원합니다."
        ],
        [
          "상담 시 어떤 자료를 준비해야 하나요?",
          "정확한 검토와 견적을 위해 디자인 이미지 또는 도식화, 사이즈 스펙, 원단 및 부자재 조건, 목표 수량, 희망 단가, 납기, 판매 시장과 브랜드 포지션을 준비해 주시는 것이 좋습니다.\n\n자료가 완전하지 않은 경우에도 참고 이미지와 기본 요구 사항을 공유해 주시면 구조, 공정 난이도와 생산 가능성을 함께 검토해 드립니다."
        ],
        [
          "ATLY는 어떤 업무를 지원하나요?",
          "ATLY는 단순 임가공이 아니라 개발부터 생산까지 연결하는 통합 생산 파트너입니다. 디자인 구현, 패턴 개발, 공정 분석, 원부자재 소싱, 샘플 제작, 공장 매칭, 양산, 진행 관리, 품질 검사와 출고 준비를 지원합니다.\n\n특히 소량 빠른 대응, 높은 디자인 재현도, 효율적인 커뮤니케이션이 필요한 브랜드에 적합합니다."
        ],
        [
          "샘플 제작 기간은 보통 얼마나 걸리나요?",
          "일반적인 스타일의 샘플 제작 기간은 보통 7~15일입니다. 구조가 복잡하거나 원부자재 맞춤 제작, 특수 공정, 수입 부자재가 필요한 경우 기간이 연장될 수 있습니다.\n\n정식 샘플 진행 전 스타일 난이도에 따라 예상 개발 일정을 안내드립니다."
        ],
        [
          "양산 기간은 보통 얼마나 소요되나요?",
          "일반적인 양산 기간은 보통 15~30일이며, 스타일 난이도, 주문 수량, 원부자재 입고 일정과 공장 스케줄에 따라 달라집니다.\n\n다운 재킷, 스키웨어, 기능성 재킷, 더블페이스 코트, 퍼 제품 등 복잡한 품목은 공정 난이도에 따라 별도로 산정합니다."
        ],
        [
          "최소 주문 수량은 어떻게 되나요?",
          "ATLY는 소량 빠른 생산 협업을 지원하며, 일반 주문은 100장부터 상담하는 것을 권장합니다. 품목, 원부자재, 공정 조건에 따라 실제 최소 수량은 달라질 수 있습니다.\n\n재고 원단과 일반 공정은 비교적 유연하게 진행할 수 있으나, 별도 제직, 염색, 특수 부자재 또는 복잡한 공정이 포함되는 경우 최소 수량이 높아질 수 있습니다."
        ],
        [
          "주력 생산 품목은 무엇인가요?",
          "ATLY는 중고급 겨울 아우터와 기능성 아우터를 중심으로 운영합니다. 다운 재킷, 패딩, 기능성 재킷, 스키웨어, 더블페이스 코트, 캐시미어 코트, 퍼, 무스탕, 시어링 제품 등을 중점적으로 다룹니다.\n\n복잡한 아우터 제품의 공정 분석, 원부자재 통합, 샘플 개발과 소량 생산이 핵심 강점입니다."
        ],
        [
          "참고 이미지로 스타일 개발이 가능한가요?",
          "가능합니다. 참고 이미지, 브랜드 무드 이미지 또는 샘플 사진을 제공해 주시면 패턴 구조, 원단 효과, 부자재 구성과 공정 디테일을 분석합니다.\n\n다만 기존 제품을 그대로 복제하기보다는 브랜드 포지션에 맞게 재해석하여 차별화된 제품으로 개발하는 방식을 권장합니다."
        ],
        [
          "품질 관리는 어떻게 진행되나요?",
          "개발 단계에서는 패턴, 원부자재, 공정과 샘플 기준을 확인합니다.\n\n생산 단계에서는 재단, 봉제, 충전, 테이핑, 다림질 등 주요 공정을 추적합니다.\n\n출고 단계에서는 완제품 외관, 치수, 공정, 포장 검사를 진행하며, 복잡한 품목은 제품 특성에 맞춘 중점 검사 항목을 별도로 설정합니다."
        ]
      ]
    },
    contact: {
      title: "다음 시즌 겨울 아우터를 더 투명하게 생산하세요.",
      body: "카카오 QR 또는 상담 버튼으로 샘플 개발, 원단 소싱, MOQ, 일정 상담을 시작할 수 있습니다.",
      button: "KakaoTalk 문의"
    }
  },
  en: {
    meta: {
      title: "ATLY | Digital Winterwear Production Platform",
      description:
        "A Seoul-managed digital production partner connecting fashion brands with China's premium down jacket and outerwear manufacturing network."
    },
    nav: ["About ATLY", "Categories", "Services", "Contact", "FAQ"],
    hero: {
      eyebrow: "Seoul managed. Hangzhou made. Digitally transparent.",
      title: "Winterwear production with taste, control, and transparency.",
      body:
        "From Seoul brand communication to Hangzhou sampling and bulk production, ATLY turns design intent, materials, craftsmanship, and QC into one transparent production experience.",
      cta: "Consult on Kakao",
      secondary: "Explore capabilities",
      stats: ["13 years in premium apparel", "Flexible 30-100 unit MOQ", "Dedicated 1:1 merchandising"]
    },
    positioning: {
      title: "ATLY leads the brand relationship and quality standard.",
      items: [
        ["ATLY Seoul HQ", "Brand communication, design direction, quality standard, customer support"],
        ["Hangzhou Production Center", "Sampling, material matching, and bulk production under ATLY control"],
        ["Digital Control Room", "Sample, trims, QC, logistics, and payment records connected"]
      ]
    },
    environment: {
      title: "A Clear View Of Our Working Environment",
      body: "Seoul communication is connected with a Hangzhou sampling and production scheduling office of 10+ specialists, giving brands a direct view of ATLY's professional working system.",
      items: [
        ["Pattern Room", "Where pattern engineering, construction details, and sample intent are aligned", "/assets/environment-pattern-room.jpg"],
        ["Sample Room", "A bright space for fitting review, material checks, and sample refinement", "/assets/environment-sample-room.jpg"],
        ["Office", "The operating desk for communication, schedules, files, and QC reports", "/assets/environment-office.jpg"],
        ["Hangzhou Factory", "The China Hangzhou production network connecting samples to bulk winterwear orders", "/assets/environment-factory.jpg"],
        ["Hangzhou Fabric Warehouse", "Fabric rolls and trims are reviewed close to production for faster material decisions", "/assets/environment-fabric-warehouse.jpg"],
        ["Automatic Down Filling", "Dedicated equipment controls fill weight and down distribution consistency", "/assets/environment-auto-down-filling.jpg"],
        ["Seam Sealing", "Heat tape bonds along the seam to stabilize waterproof performance", "/assets/process-seam-sealing-real.png"],
        ["Shell Jacket Production", "A Hangzhou production environment for waterproof and technical outerwear", "/assets/environment-shell-production.jpg"],
        ["30-Year Pattern Master", "An experienced pattern maker reviews physical patterns and fabrics for sample precision", "/assets/environment-master-patternmaker.png"],
        ["Hangzhou Production Line", "A close look at filling, seam sealing, and sewing processes in China Hangzhou", "/assets/environment-production-corner.jpg"]
      ]
    },
    supply: {
      title: "The winterwear supply chain operated by ATLY",
      body: "Materials, trims, filling, production, and international logistics are coordinated under one ATLY standard.",
      metrics: [
        ["20Y+", "Winterwear experience"],
        ["2000+", "Premium factory pool"],
        ["500+", "Fabric & trim partners"],
        ["20+", "International logistics partners"]
      ],
      suppliers: ["SAMSUNG DOWN", "TORAY", "Bemberg", "SHINDO", "YKK", "IDEAL", "3M", "LIUQIAO FEATHER", "TEIJIN", "COATS", "NIFCO", "NIKKE TEXTILE", "STYLEM", "SAB", "CONSINEE", "DURAFLEX"],
      brands: ["MUMM", "LACOSTE", "Merehaus", "KARL LAGERFELD", "SSSTUFFF", "GANT", "Rest & Recreation", "AT THE BAGEL", "TOMGIRL", "UNDER STANDING", "HAZZYS", "ELBORN", "COCOON", "PARUR", "KAILAS", "Koradior", "broadcast", "DKNY"],
      supplierTitle: "Fabric & trim suppliers",
      brandTitle: "Cooperated brands",
      note: "Selected cooperating suppliers and brands shown in part."
    },
    platform: {
      title: "A production workspace your team can open every day",
      body:
        "The PPT workflow for online customization, order confirmation, payment, and logistics is reimagined as a modern dashboard experience for brands.",
      modules: ["Order timeline", "Sample approval", "Trim uploads", "QC reports", "Photo/video updates", "Payment records", "Logistics", "Document center"]
    },
    craft: {
      title: "Interactive craft systems for down and tailoring",
      body:
        "Seam sealing, precision down filling, hand-stitching, and digital sampling become animated product stories instead of flat factory claims.",
      tabs: [
        ["Auto Down + Seam Tape", "Automatic down filling equipment and seam taping stabilize warmth and function"],
        ["Hand Stitch", "Pure hand-finishing for double-face cashmere and fur products"],
        ["3D Pattern Room", "Senior patternmakers and digital 3D sampling improve design fidelity"]
      ]
    },
    categories: {
      title: "Core Service Product Introduction",
      items: [
        ["Down Jackets", "100 units MOQ", "/assets/product-down-jackets.png", "We develop down-proof fabrics, automatic filling specs, and wind-resistant construction around each brand fit. Sampling, bulk production, and QC stay connected in one workflow."],
        ["Technical Shells", "100 units MOQ", "/assets/product-technical-shells.png", "Waterproof fabrics, seam tape, zippers, and functional trims are engineered as one product system. The result balances outdoor performance with scalable production."],
        ["Skiwear", "100 units MOQ", "/assets/product-skiwear.png", "Pattern, insulation, waterproofing, and durability are developed for winter sports use. Color blocking, fill weight, and accessories can be adjusted by season plan."],
        ["Double-face Wool", "50 units MOQ", "/assets/product-wool-coats.png", "Hand finishing and precise pattern balance shape a premium coat line. ATLY supports both small test runs and refined boutique production."],
        ["Fur / Shearling", "20 units MOQ", "/assets/product-fur-shearling.png", "Material direction, thickness, and stitch paths are controlled to stabilize luxury outerwear silhouettes. Low-volume development keeps the brand standard intact."],
        ["Goose Down Bedding", "95% goose down", "/assets/goose-duvet.png", "Down quality, fill volume, and quilting structure are tuned for even loft and soft handfeel. Fabric choice, labeling, and packaging can be coordinated together."]
      ]
    },
    advantages: {
      title: "Strategic gains for growing brands",
      rows: [
        ["Fixed cost", "In-house R&D team overhead", "Instant Korea-China specialist team", "Up to 40% lower"],
        ["Sourcing", "Slow supplier discovery", "YKK, RIRI, Primaloft, Allied Down access", "50% faster"],
        ["MOQ", "High inventory exposure", "30-100 unit test production", "Lower launch risk"],
        ["Quality", "Overseas production blind spots", "4-stage QC and dedicated MD", "Premium assurance"],
        ["Response", "Delayed claims and time zones", "Seoul HQ local support", "90% faster feedback"]
      ]
    },
    workflow: {
      title: "From consultation to delivery, one extended team.",
      steps: ["Inquiry", "Design / spec brief", "Material & factory match", "Sample development", "Bulk production", "Production tracking", "Product QC", "Logistics / customs"]
    },
    app: {
      title: "The production app your brand can open every day",
      pain: "The biggest pain in overseas production is invisible progress, scattered QC photos, unclear payments, and delayed logistics updates.",
      features: [
        ["Online customization", "Brands can organize category, design notes, colors, sizes, trims, forecast quantity, and delivery requirements in one workspace, reducing missing information before sampling begins."],
        ["Production timeline", "From sample development to bulk production, workmanship feedback, QC, and shipment preparation, every status is shown chronologically so overseas production feels visible and reportable."],
        ["Document center", "Tech packs, color cards, trim references, revision notes, payment records, and logistics information are stored by order, allowing every team member to work from the same standard."],
        ["Local support", "The Seoul ATLY team responds from the same production record shown in the app, reducing misunderstandings between brand requests and factory feedback while speeding up decisions."]
      ]
    },
    network: {
      title: "Premium supply chain and global brand experience",
      body:
        "ATLY works with high-end material networks including TOARY, STYLEM, TEIJIN, SHINDO, BEMBERG, Primaloft, Allied Down, YKK, and RIRI, serving designer brands across Europe, North America, and Asia."
    },
    faq: {
      title: "FAQ",
      items: [
        [
          "How is the sample development fee calculated?",
          "The sample development fee is evaluated according to design complexity, fabric and trim requirements, and workmanship difficulty. It usually includes pattern development, construction analysis, material confirmation, sample making, and development follow-up.\n\nIf the project proceeds to a confirmed bulk order, the sample fee may be partially or fully deducted according to the order terms. The deduction method will be confirmed during quotation."
        ],
        [
          "When can the sample fee be deducted?",
          "When the customer approves the sample and proceeds to bulk production under the agreed conditions, the sample fee can normally be deducted from the bulk order amount. This may apply when the agreed quantity is reached or the approved pattern is used without major structural changes.\n\nIf the project is cancelled after sample development, or if the style requires substantial redevelopment, the sample fee is generally non-refundable or subject to reassessment."
        ],
        [
          "What cooperation models do you offer?",
          "01 If the customer provides complete design documents, we handle sampling, quotation, production, follow-up, quality control, and shipment based on the tech pack, size chart, and material requirements.\n\n02 If the customer only has reference images or a creative direction, we support style analysis, construction breakdown, material matching, and sample development.\n\n03 If the customer needs end-to-end support, we can assist with product planning, material recommendations, pattern development, sample making, and bulk production."
        ],
        [
          "What information should I prepare?",
          "For an accurate review and quotation, we recommend preparing style images or sketches, size charts, fabric and trim requirements, target quantity, target price range, delivery schedule, sales market, and brand positioning.\n\nIf the information is not complete yet, reference images and a brief requirement are enough for us to assess construction, technical difficulty, and production feasibility."
        ],
        [
          "What can ATLY support?",
          "ATLY is not a simple cut-and-sew factory; we provide integrated support from development to production. We assist with design realization, pattern development, construction analysis, fabric and trim sourcing, sample making, factory matching, bulk production, progress follow-up, quality inspection, and shipment preparation.\n\nThis is especially suitable for brands that need small-batch quick response, accurate design reproduction, and lower communication cost."
        ],
        [
          "How long does sampling usually take?",
          "For regular styles, sampling usually takes 7 to 15 days. If the style has a complex structure, customized materials, special processes, or imported trims, the lead time may be extended.\n\nBefore formal sampling begins, we will provide an estimated development schedule based on the style difficulty."
        ],
        [
          "How long does bulk production usually take?",
          "Regular bulk production usually takes 15 to 30 days, depending on style complexity, order quantity, material arrival time, and factory schedule.\n\nComplex categories such as down jackets, skiwear, technical shells, double-face wool coats, and fur products are evaluated separately according to workmanship difficulty."
        ],
        [
          "What is the minimum order quantity?",
          "ATLY supports small-batch quick-response cooperation. For regular orders, we generally recommend starting from 100 pieces. The actual MOQ may vary according to category, fabric, trims, and construction requirements.\n\nStock fabrics and standard workmanship can be more flexible, while custom weaving, dyeing, special trims, or complex workmanship may require a higher MOQ."
        ],
        [
          "Which categories are your core strengths?",
          "We focus on mid- to high-end winter outerwear and functional outerwear, including down jackets, padded jackets, technical shells, skiwear, double-face wool coats, cashmere coats, fur, shearling, and mouton products.\n\nOur strength lies in construction analysis, material integration, sample development, and small-batch production for complex outerwear."
        ],
        [
          "Can you develop a style from reference images?",
          "Yes. Customers can provide reference images, brand mood images, or sample photos. We will analyze the pattern structure, fabric effect, trim configuration, and construction details.\n\nHowever, we recommend redevelopment based on your own brand positioning instead of directly copying existing products, so the final style has stronger differentiation."
        ],
        [
          "How do you control quality?",
          "During development, we confirm pattern, materials, workmanship, and sample standards.\n\nDuring production, we follow key processes such as cutting, sewing, filling, seam sealing, and pressing.\n\nBefore shipment, our QC team checks garment appearance, measurements, workmanship, and packing. For complex categories, we define dedicated inspection points according to the product characteristics."
        ]
      ]
    },
    contact: {
      title: "Build the next winter season with more transparency.",
      body: "Use Kakao to discuss sample development, sourcing, MOQ, and production timelines.",
      button: "Talk on Kakao"
    }
  },
  zh: {
    meta: {
      title: "ATLY | 高端冬装数字化生产平台",
      description: "首尔 ATLY 与杭州 RONDA 生产配套中心联动，为韩国及全球品牌提供高端羽绒服、滑雪服、双面羊绒、皮草与鹅绒寝具生产管理。"
    },
    nav: ["ATLY介绍", "品类", "服务", "咨询", "问题"],
    hero: {
      eyebrow: "首尔管理 · 杭州制造 · 全程透明",
      title: "让冬装生产更有审美，也更透明。",
      body:
        "从首尔理解品牌审美，到杭州完成打样与量产，ATLY 把设计意图、面辅料、工艺、QC 与订单进度整合成一个可视化的高端冬装生产体验。",
      cta: "Kakao 咨询",
      secondary: "查看生产能力",
      stats: ["13 年高端服装生产管理", "30-100 件起柔性快反", "1 对 1 专业跟单质控"]
    },
    positioning: {
      title: "首尔 ATLY 统一审美、沟通与生产标准。",
      items: [
        ["ATLY Seoul HQ", "主导品牌沟通、设计方向、质量标准与客户服务"],
        ["Hangzhou Production Center", "在 ATLY 标准下执行打样、面辅料匹配与量产"],
        ["Digital Control Room", "把样衣、辅料、QC、物流和付款记录连成一个透明工作台"]
      ]
    },
    environment: {
      title: "一览我们的环境展示",
      body: "把首尔沟通窗口与中国杭州 10+ 位专业人士组成的打样及生产调度办事处串成一条可视化动线，让客户全方位直观感受 ATLY 的专业能力。",
      items: [
        ["板房", "版型、工艺单和细节确认从这里开始", "/assets/environment-pattern-room.jpg"],
        ["样衣间", "用于样衣试版、面料手感和版型比例确认", "/assets/environment-sample-room.jpg"],
        ["办公室", "负责沟通、排期、文件归档和 QC 报告整理", "/assets/environment-office.jpg"],
        ["杭州工厂", "位于中国杭州，承接样衣到大货生产的冬装生产网络", "/assets/environment-factory.jpg"],
        ["杭州面料仓库", "位于中国杭州，面料卷与辅料可快速匹配到生产计划", "/assets/environment-fabric-warehouse.jpg"],
        ["自动充绒", "专业自动充绒设备，控制克重稳定与羽绒分布均匀度", "/assets/environment-auto-down-filling.jpg"],
        ["压胶工艺展示", "热压胶条沿缝位贴合，保障冲锋衣与功能外套的防水稳定性", "/assets/process-seam-sealing-real.png"],
        ["冲锋衣生产环境", "位于中国杭州，支持防水功能外套与户外工艺生产", "/assets/environment-shell-production.jpg"],
        ["30年经验版师", "资深版师现场审版、修版和确认面料状态，提升样衣精准度", "/assets/environment-master-patternmaker.png"],
        ["杭州生产线", "位于中国杭州，充绒、压胶、缝制等核心工艺的现场展示", "/assets/environment-production-corner.jpg"]
      ]
    },
    supply: {
      title: "由 ATLY 主导连接的冬装供应链",
      body: "面料、辅料、填充、生产工艺与国际物流，都以 ATLY 的客户标准进行调度与管理。",
      metrics: [
        ["20Y+", "冬装工作经验"],
        ["2000+", "优质精品工厂"],
        ["500+", "面辅料合作"],
        ["20+", "国际物流快递"]
      ],
      suppliers: ["三星羽绒", "TORAY", "Bemberg", "SHINDO", "YKK", "IDEAL", "3M", "柳桥羽绒", "TEIJIN", "COATS", "NIFCO", "NIKKE TEXTILE", "STYLEM", "SAB", "CONSINEE", "DURAFLEX"],
      brands: ["MUMM", "LACOSTE", "Merehaus", "KARL LAGERFELD", "SSSTUFFF", "GANT", "Rest & Recreation", "AT THE BAGEL", "TOMGIRL", "UNDER STANDING", "HAZZYS", "ELBORN", "COCOON", "PARUR", "KAILAS", "Koradior", "broadcast", "DKNY"],
      supplierTitle: "辅料供应商",
      brandTitle: "合作品牌",
      note: "注：合作面辅料供应商及品牌仅展示部分。"
    },
    platform: {
      title: "品牌每天都能打开的生产工作室",
      body:
        "把 PPT 中的在线定制、订单确认、费用支付、物流跟进与进度管理，升级为面向品牌客户的现代化 dashboard。",
      modules: ["订单时间线", "样衣确认", "辅料上传", "QC 报告", "图片/视频更新", "付款记录", "物流追踪", "文件中心"]
    },
    craft: {
      title: "让羽绒与缝纫工艺动起来",
      body:
        "通过动态缝线、充绒层、工艺节点和版房场景，把无缝压胶、精密充绒、纯手工缝制与 3D 打样转化成可感知的专业能力。",
      tabs: [
        ["自动充绒 + 压胶", "专业自动充绒机与压胶封缝工艺，稳定保暖结构与功能表现"],
        ["Hand Stitch", "双面羊绒与皮草系列的 100% 纯手工缝制细节"],
        ["资深版师 + 3D 打样", "资深版师结合 3D 数字化打样，提高设计意图还原度"]
      ]
    },
    categories: {
      title: "核心服务产品介绍",
      items: [
        ["羽绒服", "100 件 MOQ", "/assets/product-down-jackets.png", "围绕品牌版型开发防钻绒面料、自动充绒克重和防风缝制结构。样衣、大货与 QC 统一在 ATLY 工作流里推进。"],
        ["冲锋衣", "100 件 MOQ", "/assets/product-technical-shells.png", "把防水面料、压胶工艺、拉链和功能辅料作为完整产品系统来设计。兼顾户外性能、量产效率和品牌视觉。"],
        ["滑雪服", "100 件 MOQ", "/assets/product-skiwear.png", "以保暖、防水、耐磨和运动版型为核心配置生产工艺。可按季度企划调整拼色、充绒量和功能配件。"],
        ["双面羊绒", "50 件 MOQ", "/assets/product-wool-coats.png", "通过手工缝制、精细版型和面料垂感控制完成高端大衣线。适合小批量测试，也能承接精品化量产。"],
        ["皮草/皮毛一体", "20 件 MOQ", "/assets/product-fur-shearling.png", "根据材质毛向、厚度和缝制路径稳定高端外套廓形。低起订量开发也能保持品牌级细节标准。"],
        ["鹅绒被", "95% 鹅绒", "/assets/goose-duvet.png", "从鹅绒品质、充绒量到绗线结构控制蓬松度和触感。面料、标识与包装规格可同步配套。"]
      ]
    },
    advantages: {
      title: "品牌合作后的直接红利",
      rows: [
        ["固定成本", "自建设计、版师、打样和采购团队", "直接拥有中韩双城外聘专业团队", "最高降低 40%"],
        ["采购效率", "独立找供应商周期长、议价弱", "共享 YKK、RIRI、Primaloft、Allied Down 等资源", "提高 50%"],
        ["MOQ", "传统大厂动辄上千件", "30-100 件起测试生产", "降低库存风险"],
        ["质量控制", "跨国生产容易开盲盒", "4 道 QC + 专业跟单经理盯盘", "高奢质量保障"],
        ["售后响应", "跨国扯皮与时差延迟", "首尔总部本地化响应", "效率提升 90%"]
      ]
    },
    workflow: {
      title: "从咨询到交付，像一个团队一样推进。",
      steps: ["需求咨询", "设计/工艺整理", "面料与工厂匹配", "样衣开发", "大货生产", "生产进度追踪", "产品质检", "物流通关"]
    },
    app: {
      title: "品牌每天都能打开的生产 App",
      pain: "海外生产最大的困扰，是进度不可见、质检图片分散、付款记录不清晰、物流反馈滞后。",
      features: [
        ["在线定制", "品牌可以把品类、设计说明、颜色尺码、辅料要求、预计数量和交期条件集中填写，减少打样前信息缺失，让开发需求更快变成可执行资料。"],
        ["生产时间线", "从样衣开发到大货生产、工艺反馈、QC 和出货准备，每个状态按时间顺序呈现，让海外生产进度可见，也方便品牌内部汇报。"],
        ["文件中心", "工艺单、色卡、辅料资料、修改记录、付款记录和物流信息按订单归档，即使团队成员变动，也能基于同一标准继续推进。"],
        ["本地客服", "首尔 ATLY 团队基于 App 内同一份生产记录进行响应，减少客户需求与工厂反馈之间的信息误差，提高沟通和决策速度。"]
      ]
    },
    network: {
      title: "顶级供应链与全球品牌经验",
      body:
        "深度连接 TOARY、STYLEM、TEIJIN、SHINDO、BEMBERG、Primaloft、Allied Down、YKK、RIRI 等面辅料网络，并服务欧洲、北美、日韩和东南亚设计师品牌。"
    },
    faq: {
      title: "Q&A｜常见问题",
      items: [
        [
          "样品如何收费？",
          "样品开发费根据款式复杂度、面辅料要求和工艺难度综合评估，通常包含版型开发、工艺拆解、面辅料确认、样衣制作与进度跟进。\n\n后续进入正式大货合作后，可根据订单情况部分或全部抵扣，具体方式会在报价阶段提前确认。"
        ],
        [
          "什么情况下样品费可以抵扣？",
          "客户确认样品并进入大货订单后，样品费通常可按约定抵扣。达到约定数量、沿用原样版型且没有重大结构变更时，可作为大货费用的一部分。\n\n如开发后取消订单，或后续进行大幅度重新开发，样品费用通常不退还并需重新评估。"
        ],
        [
          "我们的合作方式是什么？",
          "01 客户提供完整设计资料：我们负责打样、报价、生产、跟单、质检与出货。\n\n02 客户只有图片或设计方向：我们协助款式分析、工艺拆解、面辅料匹配与样品开发。\n\n03 从设计到生产整体合作：我们提供款式企划、材料建议、版型开发、样衣制作到批量生产的完整支持。"
        ],
        [
          "我需要提供什么资料？",
          "建议提供款式图片或设计稿、尺寸表、面辅料要求、目标数量、目标价格区间、交货时间，以及销售市场或品牌定位。\n\n资料暂不完整时，也可以先提交参考图和大致需求，我们会协助判断结构、工艺难点与可落地方案。"
        ],
        [
          "你们能帮我完成哪些工作？",
          "ATLY 提供从开发到生产的整合型服务，包括设计还原、版型开发、工艺分析、面辅料采购、样衣制作、工厂匹配、大货生产、进度跟进、质量检查和出货安排。\n\n尤其适合需要小单快反、重视设计还原度并希望降低沟通成本的品牌客户。"
        ],
        [
          "样品周期一般需要几天？",
          "常规款式的样品周期通常为 7–15 天。款式结构复杂、面辅料需要定制、涉及特殊工艺或进口辅料时，周期会相应延长。正式打样前，我们会根据款式难度给出预计开发时间。"
        ],
        [
          "大货生产周期一般需要多久？",
          "常规大货周期通常为 15–30 天，具体取决于款式复杂度、订单数量、面辅料到货时间和工厂排期。羽绒服、滑雪服、冲锋衣、双面呢大衣和皮草等复杂品类会按工艺难度单独评估。"
        ],
        [
          "最低起订量是多少？",
          "我们支持小单快反，常规订单建议从 100 件起。不同品类、面辅料和工艺要求会影响实际起订量。\n\n现货面料与常规工艺可以更灵活；定织、定染、特殊辅料或复杂工艺的起订量会相应提高。"
        ],
        [
          "你们主要擅长哪些品类？",
          "我们重点服务中高端冬季外套和功能性外套，包括羽绒服、棉服、冲锋衣、滑雪服、双面呢大衣、羊绒大衣、皮草、皮毛一体和羊剪绒。\n\n核心优势是复杂外套的工艺拆解、面辅料整合、样衣开发与小单生产。"
        ],
        [
          "可以根据图片还原款式吗？",
          "可以。客户可提供参考图片、品牌风格图或样衣照片，我们会分析版型结构、面料效果、辅料配置和工艺细节。\n\n我们更建议结合品牌定位进行二次开发，避免直接复制已有款式，同时提升产品差异化。"
        ],
        [
          "你们如何保证品质？",
          "开发阶段：确认版型、面辅料、工艺与样衣标准。\n\n生产阶段：跟进裁剪、车缝、填充、压胶和整烫等关键工序。\n\n出货阶段：进行成衣检查、尺寸抽检、外观检查与包装检查。复杂品类会根据产品特点制定专项质检项目。"
        ]
      ]
    },
    contact: {
      title: "让下一季冬装生产更透明。",
      body: "通过 Kakao 直接咨询样衣开发、面料资源、MOQ 和交期安排。",
      button: "KakaoTalk 咨询"
    }
  },
  ja: {
    meta: {
      title: "ATLY | 高級ウィンターウェアのデジタル生産プラットフォーム",
      description:
        "ソウル ATLY が杭州の生産ネットワークと連携し、ダウンジャケット、スキーウェア、ダブルフェイスウール、ファー、グースダウン寝具の開発と量産を管理します。"
    },
    nav: ["ATLY紹介", "カテゴリー", "サービス", "相談", "FAQ"],
    hero: {
      eyebrow: "Seoul managed. Hangzhou made. Digitally transparent.",
      title: "冬のアウター生産を、より美しく、より透明に。",
      body:
        "ソウルでブランドの感性を理解し、杭州の生産ネットワークでサンプルと量産を完成させます。ATLY はデザイン意図、素材、副資材、工程、QC、進行状況を一つの画面につなげる冬物生産パートナーです。",
      cta: "Kakao 相談",
      secondary: "生産力を見る",
      stats: ["13年の高級アパレル生産管理", "30-100点から柔軟に対応", "1対1の専任MD品質管理"]
    },
    positioning: {
      title: "ソウル ATLY が感性、コミュニケーション、生産基準を統合します。",
      items: [
        ["ATLY Seoul HQ", "ブランド対応、デザイン方向、品質基準、顧客サポートを主導"],
        ["Hangzhou Production Center", "ATLY の基準でサンプル、素材マッチング、量産を実行"],
        ["Digital Control Room", "サンプル、副資材、QC、物流、支払い記録を透明に接続"]
      ]
    },
    environment: {
      title: "ATLY の作業環境を一望",
      body: "ソウルのコミュニケーション拠点と、杭州にある10名以上のサンプル・生産調整専門チームをつなぎ、ATLYの実際の専門体制を可視化します。",
      items: [
        ["パターンルーム", "型紙、縫製仕様、ディテール確認が始まる技術空間", "/assets/environment-pattern-room.jpg"],
        ["サンプルルーム", "サンプル確認、素材感、シルエット調整を行う明るい空間", "/assets/environment-sample-room.jpg"],
        ["オフィス", "連絡、スケジュール、書類、QC レポートを整理する運営拠点", "/assets/environment-office.jpg"],
        ["杭州工場", "中国杭州でサンプルから量産までつなぐ冬物生産ネットワーク", "/assets/environment-factory.jpg"],
        ["杭州素材倉庫", "生地ロールと副資材を生産計画へ素早く接続できる素材拠点", "/assets/environment-fabric-warehouse.jpg"],
        ["自動ダウン充填", "充填量とダウン分布の安定性を管理する専用設備", "/assets/environment-auto-down-filling.jpg"],
        ["シームテープ工程", "熱圧着テープを縫い目に密着させ、防水性能を安定させます", "/assets/process-seam-sealing-real.png"],
        ["シェルジャケット生産", "防水機能アウターに対応する杭州の生産環境", "/assets/environment-shell-production.jpg"],
        ["30年経験のパタンナー", "熟練パタンナーが実物型紙と素材を確認し、サンプル精度を高めます", "/assets/environment-master-patternmaker.png"],
        ["杭州生産ライン", "充填、圧着、縫製など主要工程を確認できる中国杭州の現場", "/assets/environment-production-corner.jpg"]
      ]
    },
    supply: {
      title: "ATLY が主導する冬物サプライチェーン",
      body: "素材、副資材、充填、縫製工程、国際物流を ATLY の品質基準で一括管理します。",
      metrics: [
        ["20Y+", "冬物経験"],
        ["2000+", "優良工場ネットワーク"],
        ["500+", "素材・副資材パートナー"],
        ["20+", "国際物流パートナー"]
      ],
      suppliers: ["SAMSUNG DOWN", "TORAY", "Bemberg", "SHINDO", "YKK", "IDEAL", "3M", "LIUQIAO FEATHER", "TEIJIN", "COATS", "NIFCO", "NIKKE TEXTILE", "STYLEM", "SAB", "CONSINEE", "DURAFLEX"],
      brands: ["MUMM", "LACOSTE", "Merehaus", "KARL LAGERFELD", "SSSTUFFF", "GANT", "Rest & Recreation", "AT THE BAGEL", "TOMGIRL", "UNDER STANDING", "HAZZYS", "ELBORN", "COCOON", "PARUR", "KAILAS", "Koradior", "broadcast", "DKNY"],
      supplierTitle: "副資材サプライヤー",
      brandTitle: "協力ブランド",
      note: "協力サプライヤーおよびブランドは一部のみ掲載しています。"
    },
    platform: {
      title: "ブランドが毎日開ける生産ワークルーム",
      body:
        "オンラインカスタム、注文確認、支払い、物流、進行管理を、ブランド向けのモダンなダッシュボード体験として再構成しています。",
      modules: ["注文タイムライン", "サンプル承認", "副資材アップロード", "QC レポート", "写真/動画更新", "支払い記録", "物流追跡", "ドキュメントセンター"]
    },
    craft: {
      title: "ダウンと縫製工程を動きで見せる",
      body:
        "流れるステッチ、ダウン充填レイヤー、工程ノード、パターンルームを通じて、シームテープ、精密充填、手縫い、3Dサンプルを体感できる強みに変えます。",
      tabs: [
        ["自動充填 + シームテープ", "専門設備によるダウン充填と圧着工程で、保温構造と機能性を安定化"],
        ["Hand Stitch", "ダブルフェイスウールとファーのための手縫いディテール"],
        ["熟練パタンナー + 3Dサンプル", "熟練パタンナーと3Dデジタルサンプルでデザイン再現性を高めます"]
      ]
    },
    categories: {
      title: "主要サービス製品紹介",
      items: [
        ["ダウンジャケット", "100点 MOQ", "/assets/product-down-jackets.png", "ブランドのフィットに合わせて、ダウンプルーフ素材、自動充填量、防風縫製を設計します。サンプルから量産QCまで一つの流れで管理します。"],
        ["テクニカルシェル", "100点 MOQ", "/assets/product-technical-shells.png", "防水素材、シームテープ、ファスナー、機能副資材を一体の製品システムとして設計します。性能と量産性を両立します。"],
        ["スキーウェア", "100点 MOQ", "/assets/product-skiwear.png", "保温性、防水性、耐久性、運動量を基準にパターンと工程を調整します。配色、充填量、付属仕様も企画に合わせます。"],
        ["ダブルフェイスウール", "50点 MOQ", "/assets/product-wool-coats.png", "手縫い仕上げと精密なパターンで上質なコートラインを作ります。小ロットのテスト生産にも対応します。"],
        ["ファー/ムートン", "20点 MOQ", "/assets/product-fur-shearling.png", "素材の毛流れ、厚み、縫製方向を見ながら高級アウターのシルエットを安定させます。少量でもブランド基準を保ちます。"],
        ["グースダウン寝具", "95% goose down", "/assets/goose-duvet.png", "ダウン品質、充填量、キルティング構造を調整し、均一なロフトと柔らかな触感を作ります。素材から包装仕様まで提案します。"]
      ]
    },
    advantages: {
      title: "ブランドが得られる直接的なメリット",
      rows: [
        ["固定費", "社内開発チームの構築負担", "日韓中をつなぐ外部専門チームを即時確保", "最大40%削減"],
        ["調達", "素材・副資材探しの長期化", "YKK、RIRI、Primaloft、Allied Down などと連携", "50%効率化"],
        ["MOQ", "大規模工場の高ロットリスク", "30-100点からテスト生産", "在庫リスク低減"],
        ["品質", "海外生産のブラックボックス化", "4段階QCと専任MDが追跡", "高級品質を安定化"],
        ["対応", "時差とクレーム対応の遅れ", "ソウルHQのローカルサポート", "90%速いフィードバック"]
      ]
    },
    workflow: {
      title: "相談から納品まで、一つのチームのように動きます。",
      steps: ["相談受付", "デザイン/仕様整理", "素材・工場マッチング", "サンプル開発", "量産", "生産進行追跡", "製品QC", "物流・通関"]
    },
    app: {
      title: "ブランドが毎日開く生産 App",
      pain: "海外生産で最も不安なのは、進行状況、QC写真、支払い記録、物流情報が分散して見えないことです。",
      features: [
        ["オンラインカスタム", "ブランドはカテゴリー、デザイン説明、カラー、サイズ、副資材、予定数量、納期条件を一つの画面で整理でき、サンプル開始前の情報不足を抑えます。"],
        ["生産タイムライン", "サンプル開発から量産、工程フィードバック、QC、出荷準備までを時系列で確認でき、海外生産の進行状況を社内でも共有しやすくします。"],
        ["ドキュメントセンター", "仕様書、色見本、副資材資料、修正履歴、支払い記録、物流情報を注文ごとに保管し、担当者が変わっても同じ基準で進行できます。"],
        ["ローカルサポート", "ソウル ATLY チームが App 上の同じ生産記録をもとに対応するため、ブランド要望と工場回答の認識差を減らし、意思決定を速めます。"]
      ]
    },
    network: {
      title: "プレミアムサプライチェーンとグローバルブランド経験",
      body:
        "TOARY、STYLEM、TEIJIN、SHINDO、BEMBERG、Primaloft、Allied Down、YKK、RIRI などの高級素材・副資材ネットワークと、欧米・アジアのデザイナーブランド運営経験を蓄積しています。"
    },
    faq: {
      title: "よくある質問",
      items: [
        [
          "サンプル開発費はどのように決まりますか？",
          "サンプル開発費は、デザインの複雑さ、素材・副資材の条件、工程難度をもとに算定します。通常、パターン開発、工程分析、素材確認、サンプル制作、進行管理が含まれます。\n\nその後、正式な量産注文に進む場合は、注文条件に応じて一部または全額を控除できる場合があります。控除方法は見積段階で事前に確認します。"
        ],
        [
          "どのような場合にサンプル費を控除できますか？",
          "お客様がサンプルを承認し、合意条件に基づいて量産へ進む場合、サンプル費は通常、量産費用から控除できます。合意数量を満たす場合や、承認済みパターンを大きな変更なく使用する場合が該当します。\n\nサンプル開発後に注文をキャンセルする場合、または大幅な再開発が必要になる場合、サンプル費は原則として返金不可、または再見積となります。"
        ],
        [
          "協業方式はどのように分かれますか？",
          "01 お客様が完全なデザイン資料をお持ちの場合：仕様書、サイズ表、素材条件をもとに、サンプル、見積、生産、進行管理、品質検査、出荷まで対応します。\n\n02 参考画像や方向性のみの場合：スタイル分析、工程分解、素材マッチング、サンプル開発を支援します。\n\n03 企画から生産まで必要な場合：商品企画、素材提案、パターン開発、サンプル制作、量産まで一貫して支援します。"
        ],
        [
          "相談時に必要な資料は何ですか？",
          "正確な確認と見積のため、スタイル画像またはデザイン画、サイズ表、素材・副資材条件、目標数量、希望価格帯、納期、販売市場、ブランドポジションをご用意いただくことをおすすめします。\n\n資料がまだ完全でない場合も、参考画像と大まかなご要望を共有いただければ、構造、工程難度、生産可能性を確認できます。"
        ],
        [
          "ATLYはどのような業務を支援できますか？",
          "ATLYは単なる縫製工場ではなく、開発から生産までをつなぐ統合型パートナーです。デザイン再現、パターン開発、工程分析、素材調達、サンプル制作、工場マッチング、量産、進捗管理、品質検査、出荷準備を支援します。\n\n小ロット短納期、デザイン再現性、円滑なコミュニケーションを重視するブランドに適しています。"
        ],
        [
          "サンプル制作期間は通常どのくらいですか？",
          "一般的なスタイルのサンプル制作期間は通常7〜15日です。構造が複雑な場合、素材の別注、特殊工程、輸入副資材が必要な場合は、期間が延びることがあります。\n\n正式にサンプルを開始する前に、スタイル難度に応じた開発予定をお知らせします。"
        ],
        [
          "量産期間は通常どのくらいですか？",
          "一般的な量産期間は通常15〜30日です。具体的な期間は、スタイルの複雑さ、注文数量、素材入荷時期、工場スケジュールによって異なります。\n\nダウンジャケット、スキーウェア、機能性ジャケット、ダブルフェイスコート、ファー製品などの複雑な品目は、工程難度に応じて個別に算定します。"
        ],
        [
          "最低発注数量はどのくらいですか？",
          "ATLYは小ロット・クイックレスポンス型の協業に対応しており、通常注文は100点からのご相談をおすすめしています。実際のMOQは、品目、素材、副資材、工程条件によって異なります。\n\n在庫素材や一般的な工程であれば比較的柔軟ですが、別注織り、染色、特殊副資材、複雑な工程が含まれる場合はMOQが上がることがあります。"
        ],
        [
          "主に得意な品目は何ですか？",
          "ATLYは中高級冬季アウターと機能性アウターを中心に対応しています。ダウンジャケット、中綿アウター、機能性ジャケット、スキーウェア、ダブルフェイスコート、カシミヤコート、ファー、ムートン、シアリング製品などが主な品目です。\n\n複雑なアウターの工程分解、素材統合、サンプル開発、小ロット生産が強みです。"
        ],
        [
          "参考画像からスタイル開発はできますか？",
          "可能です。参考画像、ブランドイメージ、サンプル写真をご提供いただければ、パターン構造、素材感、副資材構成、工程ディテールを分析します。\n\nただし既存商品をそのまま複製するのではなく、ブランドポジションに合わせて再開発し、差別化された商品に仕上げることをおすすめします。"
        ],
        [
          "品質管理はどのように行いますか？",
          "開発段階では、パターン、素材、副資材、工程、サンプル基準を確認します。\n\n生産段階では、裁断、縫製、充填、シームテープ、仕上げなどの重要工程を追跡します。\n\n出荷前には、外観、寸法、縫製、梱包を検査します。複雑な品目については、製品特性に応じた重点検査項目を設定します。"
        ]
      ]
    },
    contact: {
      title: "次の冬シーズンを、もっと透明に生産しましょう。",
      body: "Kakao からサンプル開発、素材調達、MOQ、スケジュールを直接相談できます。",
      button: "KakaoTalk 相談"
    }
  }
} as const;

export function getContent(locale: string) {
  return content[locales.includes(locale as Locale) ? (locale as Locale) : "ko"];
}
