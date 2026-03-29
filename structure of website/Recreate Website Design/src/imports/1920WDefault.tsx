import svgPaths from "./svg-85i1kaywi3";
import imgAanvikshiki1 from "figma:asset/71c843c9918b5eba60863f034dd0ab02466e2c9c.png";
import imgImage from "figma:asset/a922596c527542771d3a8f321a4e04ff051477f7.png";
import imgAanvikshiki2 from "figma:asset/544e9042217b53c392065063714c04cb1023212d.png";
import { imgAanvikshiki } from "./svg-7ztfl";

function Aanvikshiki() {
  return (
    <div className="absolute aspect-[190.6999969482422/100] bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0%] mask-size-[190.7px_100%] mix-blend-multiply top-0" data-name="aanvikshiki" style={{ maskImage: `url('${imgAanvikshiki}')` }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAanvikshiki1} />
      </div>
    </div>
  );
}

function ImgAanvikshikiMaskGroup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[190.7px]" data-name="Img - aanvikshiki:mask-group">
      <Aanvikshiki />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Container">
      <ImgAanvikshikiMaskGroup />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <Container1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #2E261F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button menu">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[25.6px]">Solutions</p>
      </div>
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button menu">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[25.6px]">Project EASE</p>
      </div>
      <Svg1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Mission</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Impact</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Blog</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #2E261F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #2E261F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSearch() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[6px] shrink-0" data-name="Button - Search">
      <Svg2 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#c65f39] content-stretch flex h-[36px] items-center justify-center px-[12px] relative rounded-[6px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <ButtonMenu />
      <ButtonMenu1 />
      <Link1 />
      <Link2 />
      <Link3 />
      <ButtonSearch />
      <Link4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link />
      <Container2 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(246,244,238,0.95)] content-stretch flex flex-col items-start left-0 px-[284px] top-0 w-[1920px]" data-name="Nav">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_4px_24px_-4px_rgba(46,38,31,0.08)] top-0 w-[1920px]" data-name="Nav:shadow" />
      <Container />
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center p-[6.8px] relative rounded-[9999px] shrink-0 w-[20px]" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(117,102,87,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[rgba(117,102,87,0.6)] h-[8px] rounded-[9999px] shrink-0 w-[4px]" data-name="Overlay" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col items-start left-[49.48%] opacity-40 right-[49.48%]" data-name="Container">
      <Border />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2889)" id="SVG">
          <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2889">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">AI-Driven Enablement</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] content-stretch flex gap-[8px] items-center px-[12.8px] py-[6.8px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(118,178,173,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Svg3 />
      <Container8 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[0px] text-[60px] tracking-[-1.2px] w-full">
        <p className="leading-[60px] mb-0">Strategic AI</p>
        <p className="mb-0">
          <span className="leading-[60px] text-[#2e261f]">{`Solutions for `}</span>
          <span className="leading-[60px] text-[#76b2ad]">High-</span>
        </p>
        <p className="leading-[60px] mb-0 text-[#76b2ad]">Impact</p>
        <p className="leading-[60px] text-[#76b2ad]">Organizations</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[946.2890014648438px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">From data engineering to medical AI research to research</p>
        <p className="mb-0">commercialization—we deliver measurable outcomes for</p>
        <p>mission-driven enterprises.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#c65f39] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[32px] relative rounded-[6px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Explore Solutions</p>
      </div>
      <SvgMargin />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <Svg5 />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#f6f4ee] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[33.6px] py-[1.6px] relative rounded-[6px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#76b2ad] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Project EASE</p>
      </div>
      <SvgMargin1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <OverlayBorder />
      <Heading />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[8px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#76b2ad] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[36px]">AI-Driven Data Engineering</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transform data sprawl into strategic intelligence with ethical governance</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[481px]" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <Margin />
        <Container13 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[8px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#76b2ad] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[36px]">Medical AI Research</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="mb-0">Evidence-based medicine enhanced by predictive diagnostics and</p>
        <p>optimization</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[482.3999938964844px] relative shrink-0 w-[482.4px]" data-name="Container">
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <Margin1 />
        <Container16 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[8px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#76b2ad] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[30px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[36px]">Research to Product</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Transform academic research into market-ready AI-powered products</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[463px]" data-name="Container">
      <Heading4 />
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <Margin2 />
        <Container19 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(251,251,248,0.8)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24.8px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_24px_-4px_rgba(46,38,31,0.08)]" data-name="Overlay+Shadow" />
        <Container12 />
        <Container15 />
        <Container18 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e8e3d9] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">WCAG AA Compliant</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e8e3d9] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Evidence-Based</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e8e3d9] relative rounded-[6px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Ethical AI</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_16px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Container21 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center max-w-[1152px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1400px] px-[124px] relative shrink-0 w-[1400px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[1200px] overflow-clip pb-[321.2px] pt-[401.2px] relative shrink-0 w-full" data-name="Section" style={{ backgroundImage: "linear-gradient(135deg, rgb(251, 251, 248) 0%, rgb(246, 244, 238) 100%)" }}>
      <div className="absolute inset-0 opacity-8" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[90%] left-0 max-w-none top-[5%] w-full" src={imgImage} />
        </div>
      </div>
      <Container4 />
      <Container5 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-start justify-center left-[380.29px] px-[16px] py-[4px] rounded-[9999px] top-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Our Philosophy</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[52px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[#2e261f] text-[0px] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="mb-0">Human-in-the-Loop</p>
        <p className="text-[#76b2ad]">AI That Keeps You in Control</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[851.6599731445312px] right-[44.35px] top-[171.25px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[0px] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px]">{`We believe AI should `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[29.25px]">augment</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px]">, not replace human judgment. Our Human-in-the-Loop approach</span>
        </p>
        <p className="leading-[29.25px] mb-0">ensures every AI-generated output receives human review, creativity, and strategic insight—the</p>
        <p className="leading-[29.25px]">critical 10% that makes content truly engaging and aligned with your vision.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="max-w-[757.031005859375px] relative shrink-0 w-[757.03px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[26.4px] relative shrink-0 text-[16px] text-[rgba(46,38,31,0.8)] text-center whitespace-nowrap">
          <p className="mb-0">{`"AI is a powerful machine tool. We harness its efficiency while preserving the complexity of human`}</p>
          <p className="mb-0">language, culture, context, and intention—elements that require human judgment to translate</p>
          <p>{`successfully."`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#fbfbf8] content-stretch flex flex-col items-start left-0 pb-[32.8px] pt-[32px] px-[32.8px] right-0 rounded-[12px] top-[291.75px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_24px_-4px_rgba(46,38,31,0.08)]" data-name="Overlay+Shadow" />
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[436.55px] max-w-[896px] relative shrink-0 w-[896px]" data-name="Container">
      <Overlay />
      <Heading1 />
      <Container24 />
      <BackgroundBorder />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[#2e261f] text-[0px] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="mb-0">The Chanakya Code</p>
        <p className="bg-clip-text text-[transparent]" style={{ backgroundImage: "linear-gradient(120.983deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          Ancient Wisdom for Modern AI Governance
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#756657] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">{`We draw our ethical values from Chanakya's timeless principles, translated into modern AI`}</p>
        <p>governance standards that ensure integrity, transparency, and accountability.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container28 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center left-[24.8px] rounded-[8px] size-[48px] top-[24.8px]" data-name="Overlay">
      <Svg6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] right-[24.8px] top-[88.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[20px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[28px]">Foresight</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] max-w-[662.4019775390625px] right-[24.8px] top-[124.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Strategic Planning</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] w-full">
          <p className="leading-[16px]">Modern Equivalent</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
          <p className="leading-[20px]">Predictive Strategic Vision</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[160.8px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] w-full">
          <p className="leading-[16px]">Our Commitment</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.7)] w-full">
          <p className="mb-0">Building systems designed for</p>
          <p className="mb-0">long-term sustainability and risk</p>
          <p>mitigation.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[237.6px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay1 />
      <Heading6 />
      <Container30 />
      <HorizontalBorder />
      <HorizontalBorder1 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center left-[24.8px] rounded-[8px] size-[48px] top-[24.8px]" data-name="Overlay">
      <Svg7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] right-[24.8px] top-[88.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[20px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[28px]">Integrity</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] max-w-[662.4019775390625px] right-[24.8px] top-[124.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Ethics & Fairness`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] w-full">
          <p className="leading-[16px]">Modern Equivalent</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
          <p className="mb-0">{`Algorithm Transparency & Bias`}</p>
          <p>Reduction</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[160.8px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] w-full">
          <p className="leading-[16px]">Our Commitment</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.7)] w-full">
          <p className="mb-0">Transparent governance and</p>
          <p>unbiased training data sets.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[257.6px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay2 />
      <Heading7 />
      <Container35 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center left-[24.8px] rounded-[8px] size-[48px] top-[24.8px]" data-name="Overlay">
      <Svg8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] right-[24.8px] top-[88.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[20px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[28px]">Accountability</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] max-w-[662.4019775390625px] right-[24.8px] top-[124.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Leadership Responsibility</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] w-full">
          <p className="leading-[16px]">Modern Equivalent</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
          <p className="leading-[20px]">Ownership of Outcomes</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[160.8px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] w-full">
          <p className="leading-[16px]">Our Commitment</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.7)] w-full">
          <p className="mb-0">Human leadership retains final</p>
          <p className="mb-0">approval and responsibility for all</p>
          <p>systems.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[237.6px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay3 />
      <Heading8 />
      <Container40 />
      <HorizontalBorder4 />
      <HorizontalBorder5 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center left-[24.8px] rounded-[8px] size-[48px] top-[24.8px]" data-name="Overlay">
      <Svg9 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] right-[24.8px] top-[88.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[20px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[28px]">Resource Mobilization</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] max-w-[662.4019775390625px] right-[24.8px] top-[124.8px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Efficiency</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] w-full">
          <p className="leading-[16px]">Modern Equivalent</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
          <p className="leading-[20px]">Value Co-creation</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[160.8px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="max-w-[593.7009887695312px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] w-full">
          <p className="leading-[16px]">Our Commitment</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.7)] w-full">
          <p className="mb-0">Customized, evidence-based</p>
          <p>solutions to maximize your ROI.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24.8px] pt-[16.8px] right-[24.8px] top-[237.6px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay4 />
      <Heading9 />
      <Container45 />
      <HorizontalBorder6 />
      <HorizontalBorder7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[24px] h-[363.2px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1152px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Container22() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Container23 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-gradient-to-b from-[#f6f4ee] relative shrink-0 to-[#fbfbf8] w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[260px] py-[96px] relative w-full">
        <Container22 />
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2855)" id="SVG">
          <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2855">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Newly Launched</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-[#c65f39] content-stretch flex gap-[8px] items-center left-0 px-[12px] py-[6px] rounded-[9999px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] top-0" data-name="Background+Shadow">
      <Svg10 />
      <Container52 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[52px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[48px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[48px]">Project EASE</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[1187.4000244140625px] right-0 top-[116px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Empowering Action for Societal Evolution</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[768px] right-[256px] top-[163.13px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Bringing ease to underserved communities by solving real-world challenges through AI-</p>
        <p>powered solutions that create measurable social impact.</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[222.5px] left-0 right-0 top-0" data-name="Container">
      <BackgroundShadow />
      <Heading10 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d33131] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">The Challenge</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[757.031005859375px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(46,38,31,0.8)] w-full whitespace-nowrap">
        <p className="mb-0">Vulnerable populations face information overload, resource</p>
        <p className="mb-0">constraints, and lack of access to technology that could improve</p>
        <p>their quality of life.</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container58 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Our Approach</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[757.031005859375px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">We co-create AI-powered tools that bridge gaps between</p>
        <p className="mb-0">challenges and solutions, making technology accessible and</p>
        <p>actionable for real communities.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container60 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Measurable Impact</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2864)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2864">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="SVG:margin">
      <Svg11 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">24/7 AI-powered support for caregivers</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2864)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2864">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="SVG:margin">
      <Svg12 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">Reduced decision-making burden through intelligent assistance</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2864)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_2864">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[16px]" data-name="SVG:margin">
      <Svg13 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="leading-[20px]">Improved quality of life for vulnerable communities</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(232,227,217,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
        <Heading13 />
        <List />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container57 />
      <Container59 />
      <Overlay5 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg14 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[19.2px]">People-Centric</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="mb-0">Focused on real needs of real communities, not theoretical</p>
        <p>solutions</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-[387px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading14 />
        <Container63 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fbfbf8] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16.8px] relative w-full">
        <Overlay6 />
        <Container62 />
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1ea91d80} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18H15" id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 22H14" id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg15 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[19.2px]">Solution-Driven</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Practical, actionable approaches to everyday challenges</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-[373px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading15 />
        <Container65 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fbfbf8] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16.8px] relative w-full">
        <Overlay7 />
        <Container64 />
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1dff4600} id="Vector" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="bg-[rgba(198,95,57,0.1)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg16 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[19.2px]">Impact-Oriented</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Measurable improvements in quality of life and outcomes</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-[377px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading16 />
        <Container67 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#fbfbf8] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16.8px] relative w-full">
        <Overlay8 />
        <Container66 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[416px] items-start justify-center left-0 right-0 top-[270.5px]" data-name="Container">
      <Container56 />
      <Container61 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame2 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg17 />
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#c65f39] h-[44px] relative rounded-[6px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center justify-center px-[32px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Visit Our CareGivers Platform</p>
        </div>
        <SvgMargin5 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#f6f4ee] h-[44px] relative rounded-[6px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#76b2ad] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[33.6px] py-[1.6px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Request a Demo</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-0 pt-[24.8px] right-0 top-[734.5px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[567.7730102539062px] right-[456.24px] top-[835.3px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Built with ethical AI principles • Privacy-first design • Community-validated</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[851.3px] max-w-[1024px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container55 />
      <HorizontalBorder8 />
      <Container68 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-gradient-to-b from-[#f6f4ee] relative shrink-0 to-[#fbfbf8] w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[448px] py-[112px] relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Solutions</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[48px] tracking-[-0.96px] w-full">
        <p className="leading-[48px]">Specialized AI Solutions</p>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[30px] tracking-[-0.6px] w-full">
        <p className="leading-[36px]">Who We Serve</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] pt-[7.125px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Tailored AI enablement for mission-driven organizations. We deliver measurable business</p>
        <p>outcomes through strategic implementation.</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] max-w-[896px] right-[480px] top-0" data-name="Container">
      <Overlay9 />
      <Heading17 />
      <Heading18 />
      <Container71 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Primary Verticals</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p11feba00} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b1afa80} id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eed8380} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg18 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start not-italic pb-[3.6px] pr-[70.92px] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[#2e261f] text-[24px] tracking-[-0.48px]">
        <p className="mb-0">AI-Driven Data</p>
        <p>Engineering</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase">
        <p className="leading-[16px]">Featured Service</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Overlay10 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d33131] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Challenge</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">Data sprawl creates paralysis—organizations</p>
        <p className="mb-0">struggle to extract strategic insights from</p>
        <p>fragmented information systems.</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[7.05px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Solution</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">End-to-end AI-powered data pipeline</p>
        <p className="mb-0">architecture with intelligent taxonomy,</p>
        <p className="mb-0">information architecture, and automated</p>
        <p className="mb-0">dashboards for real-time business</p>
        <p>intelligence.</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[7.3px] items-start relative shrink-0 w-full" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Business Outcomes</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[6.2px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Reduced time-to-insight for strategic</p>
        <p>decision-making</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container83 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[7.47px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Ethical data governance aligned with</p>
        <p>regulatory standards</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container84 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[18.83px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Actionable intelligence dashboards</p>
        <p>for business steering</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[15.56px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Sub-second query performance for</p>
        <p>mission-critical data</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container86 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Overlay11() {
  return (
    <div className="bg-[rgba(232,227,217,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Container82 />
        <List1 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container76 />
        <Container79 />
        <Overlay11 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <Svg19 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f6f4ee] h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#76b2ad] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center justify-center px-[16.8px] py-[8.8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Learn More</p>
          </div>
          <SvgMargin6 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33.6px] relative size-full">
        <Container74 />
        <Container75 />
        <Button />
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M6 18H14" id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 22H21" id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p63ade00} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 14H11" id="Vector_4" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3409fa00} id="Vector_5" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p6097dc0} id="Vector_6" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay12() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg20 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic pb-[3.6px] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e261f] text-[24px] tracking-[-0.48px]">
        <p className="leading-[32px]">Medical AI Research</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase">
        <p className="leading-[16px]">Featured Service</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Overlay12 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d33131] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Challenge</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] pb-[0.575px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">Information overload and resource</p>
        <p className="mb-0">constraints prevent rigorous evidence-based</p>
        <p className="mb-0">medicine in clinical settings, impacting</p>
        <p>patient outcomes.</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[7.425px] items-start relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Solution</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] pb-[0.575px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">AI-powered evidence-based medicine</p>
        <p className="mb-0">enhancement, predictive diagnostics, and</p>
        <p className="mb-0">resource optimization for clinical research</p>
        <p>workflows and patient care.</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[7.425px] items-start relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Business Outcomes</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[29.68px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Optimized ICU bed allocation and</p>
        <p>medical supply management</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container96 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[19.12px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Reduced operational costs through</p>
        <p>efficient evidence appraisal</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container97 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[22.99px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Improved patient outcomes via AI-</p>
        <p>driven remote monitoring</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container98 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.13px] pr-[27.58px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Accelerated clinical research with</p>
        <p>automated literature review</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container99 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
    </div>
  );
}

function Overlay13() {
  return (
    <div className="bg-[rgba(232,227,217,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Container95 />
        <List2 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container89 />
        <Container92 />
        <Overlay13 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <Svg21 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f6f4ee] h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#76b2ad] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[16.8px] py-[8.8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Learn More</p>
          </div>
          <SvgMargin7 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33.6px] relative size-full">
        <Container87 />
        <Container88 />
        <Button1 />
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1ea91d80} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18H15" id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 22H14" id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay14() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg22 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic pb-[3.6px] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e261f] text-[24px] tracking-[-0.48px]">
        <p className="leading-[32px]">Research to Product</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase">
        <p className="leading-[16px]">Featured Service</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative w-full">
        <Overlay14 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d33131] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Challenge</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">Academic research often remains trapped in</p>
        <p className="mb-0">journals and labs, failing to create real-world</p>
        <p>impact due to the commercialization gap.</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[7.05px] items-start relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Solution</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] pb-[0.575px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] w-full">
        <p className="mb-0">Bridge the research-to-market gap by</p>
        <p className="mb-0">transforming academic innovations into</p>
        <p className="mb-0">market-ready AI-powered products with</p>
        <p>strategic go-to-market support.</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[7.425px] items-start relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[606.885009765625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Business Outcomes</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.12px] pr-[44.84px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Accelerated time-to-market for</p>
        <p>research innovations</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container109 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.12px] pr-[8.55px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Revenue generation from intellectual</p>
        <p>property</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container110 />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.12px] pr-[20.49px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Expanded research impact beyond</p>
        <p>academia</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18.12px] pr-[67.04px] top-[-0.82px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.8)] whitespace-nowrap">
        <p className="mb-0">Strategic product-market fit</p>
        <p>validation</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 not-italic text-[#c65f39] text-[18px] top-[9px] w-[10.444px]">
        <p className="leading-[18px]">•</p>
      </div>
      <Container112 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function Overlay15() {
  return (
    <div className="bg-[rgba(232,227,217,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Container108 />
        <List3 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container102 />
        <Container105 />
        <Overlay15 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function SvgMargin8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <Svg23 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f6f4ee] h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#76b2ad] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center justify-center px-[16.8px] py-[8.8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Learn More</p>
          </div>
          <SvgMargin8 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33.6px] relative size-full">
        <Container100 />
        <Container101 />
        <Button2 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[24px] h-[780.15px] items-start justify-center max-w-[1152px] relative shrink-0 w-[1152px]" data-name="Container">
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] right-[24px] top-[290.9px]" data-name="Container">
      <Heading19 />
      <Container73 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] tracking-[0.35px] uppercase w-full">
        <p className="leading-[20px]">Supporting Services</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p32186a00} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3158cb00} id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbb8dfc0} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p30d40500} id="Vector_4" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay16() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center left-[24.8px] rounded-[8px] size-[40px] top-[24.8px]" data-name="Overlay">
      <Svg24 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] right-[24.8px] top-[80.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[28px]">Small Business Growth</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] max-w-[662.4019775390625px] right-[24.8px] top-[119.85px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.7)] whitespace-nowrap">
        <p className="mb-0">Democratize enterprise-grade AI tools for</p>
        <p className="mb-0">resource-constrained businesses with the Loop</p>
        <p>Marketing playbook.</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0 text-[#76b2ad]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(46,38,31,0.6)]">
        <p className="leading-[16px]">25% faster sales cycles</p>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0 text-[#76b2ad]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(46,38,31,0.6)]">
        <p className="leading-[16px]">260% conversion improvement</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0 text-[#76b2ad]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(46,38,31,0.6)]">
        <p className="leading-[16px]">24/7 AI engagement</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[24.8px] not-italic right-[24.8px] text-[12px] top-[205.05px] whitespace-nowrap" data-name="List">
      <Item15 />
      <Item16 />
      <Item17 />
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay16 />
      <Heading21 />
      <Container115 />
      <List4 />
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2d5afa00} id="Vector" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p368a6d00} id="Vector_2" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p27f78700} id="Vector_3" stroke="var(--stroke-0, #76B2AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay17() {
  return (
    <div className="absolute bg-[rgba(118,178,173,0.1)] content-stretch flex items-center justify-center left-[24.8px] rounded-[8px] size-[40px] top-[24.8px]" data-name="Overlay">
      <Svg25 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] right-[24.8px] top-[80.8px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[18px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[28px]">{`AI Adoption & Culture`}</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.8px] max-w-[662.4019775390625px] right-[24.8px] top-[119.85px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(46,38,31,0.7)] whitespace-nowrap">
        <p className="mb-0">Change management frameworks that measure</p>
        <p className="mb-0">adoption rates, employee engagement, and</p>
        <p>cross-functional collaboration.</p>
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0 text-[#76b2ad]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(46,38,31,0.6)]">
        <p className="leading-[16px]">Measurable system adoption</p>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0 text-[#76b2ad]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(46,38,31,0.6)]">
        <p className="leading-[16px]">Improved employee eNPS</p>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0 text-[#76b2ad]">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(46,38,31,0.6)]">
        <p className="leading-[16px]">Enhanced collaboration</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[24.8px] not-italic right-[24.8px] text-[12px] top-[205.05px] whitespace-nowrap" data-name="List">
      <Item18 />
      <Item19 />
      <Item20 />
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay17 />
      <Heading22 />
      <Container116 />
      <List5 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex gap-[24px] h-[289.85px] items-start justify-center max-w-[1152px] pr-[392px] relative shrink-0 w-[1152px]" data-name="Container">
      <BackgroundBorderShadow7 />
      <BackgroundBorderShadow8 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] right-[24px] top-[1163.7px]" data-name="Container">
      <Heading20 />
      <Container114 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame6 />
    </div>
  );
}

function SvgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg26 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#c65f39] h-[44px] relative rounded-[6px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] h-full items-center justify-center px-[32px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Request a Consultation</p>
        </div>
        <SvgMargin9 />
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[24px] pt-[48.8px] right-[24px] top-[1561.55px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Button3 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[1654.35px] max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container72 />
      <Container113 />
      <HorizontalBorder9 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f6f4ee] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[260px] py-[112px] relative w-full">
        <Container69 />
      </div>
    </div>
  );
}

function Overlay18() {
  return (
    <div className="bg-[rgba(118,178,173,0.1)] content-stretch flex items-start justify-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#76b2ad] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Real Impact</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[#2e261f] text-[0px] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="mb-0">Where Resource Constraints</p>
        <p className="bg-clip-text text-[transparent]" style={{ backgroundImage: "linear-gradient(122.693deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          No Longer Limit Conviction
        </p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[851.6599731445312px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#756657] text-[18px] text-center whitespace-nowrap">
        <p className="mb-0">Our mission-driven approach delivers measurable outcomes for organizations committed</p>
        <p>to meaningful change.</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Overlay18 />
      <Heading23 />
      <Container119 />
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(112.23deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          <p className="leading-[40px]">25%</p>
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Faster Decision Cycles</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24.8px] relative size-full">
        <Container121 />
        <Container122 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(118.666deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          <p className="leading-[40px]">260%</p>
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Conversion Rate Increase</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24.8px] relative size-full">
        <Container123 />
        <Container124 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(117.721deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          <p className="leading-[40px]">100%</p>
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Human-in-the-Loop</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24.8px] relative size-full">
        <Container125 />
        <Container126 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="bg-clip-text flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-[transparent] text-center whitespace-nowrap" style={{ backgroundImage: "linear-gradient(99.0476deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          <p className="leading-[40px]">∞</p>
        </div>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Potential Unlocked</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow12() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24.8px] relative size-full">
        <Container127 />
        <Container128 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex gap-[24px] h-[117.6px] items-start justify-center max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <BackgroundBorderShadow9 />
      <BackgroundBorderShadow10 />
      <BackgroundBorderShadow11 />
      <BackgroundBorderShadow12 />
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="SVG" opacity="0.5">
          <path d={svgPaths.p14a93580} id="Vector" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p29592b72} id="Vector_2" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container130() {
  return (
    <div className="max-w-[757.031005859375px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(46,38,31,0.8)] w-full">
          <p className="mb-0">{`"Project EASE transformed how we approach evidence-`}</p>
          <p className="mb-0">based medicine. Their AI tools cut our research</p>
          <p className="mb-0">appraisal time in half while maintaining the highest</p>
          <p>{`ethical standards."`}</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#76b2ad] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[25.6px]">SM</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Dr. Sarah Mitchell</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Chief Medical Officer, Regional Health System</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[304px]" data-name="Container">
      <Container133 />
      <Container134 />
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative w-full">
        <Background3 />
        <Container132 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow13() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32.8px] relative size-full">
        <Svg27 />
        <Container130 />
        <Container131 />
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="SVG" opacity="0.5">
          <path d={svgPaths.p14a93580} id="Vector" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p29592b72} id="Vector_2" stroke="var(--stroke-0, #C65F39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="max-w-[757.031005859375px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[26px] relative shrink-0 text-[16px] text-[rgba(46,38,31,0.8)] w-full">
          <p className="mb-0">{`"As a small business, we never thought we could`}</p>
          <p className="mb-0">compete with enterprise-level AI capabilities. EASE</p>
          <p className="mb-0">made it possible, affordable, and ethical. Our conversion</p>
          <p>{`rates speak for themselves."`}</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#76b2ad] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[25.6px]">MC</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e261f] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">Marcus Chen</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Founder & CEO, TechStart Solutions`}</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[238px]" data-name="Container">
      <Container138 />
      <Container139 />
    </div>
  );
}

function Container136() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative w-full">
        <Background4 />
        <Container137 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow14() {
  return (
    <div className="bg-[#fbfbf8] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dad5c8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32.8px] relative size-full">
        <Svg28 />
        <Container135 />
        <Container136 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex gap-[32px] h-[297.6px] items-start justify-center max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <BackgroundBorderShadow13 />
      <BackgroundBorderShadow14 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[36px]">Our Vision</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[946.2890014648438px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[32.5px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="mb-0">{`"A future where resource constraints no longer limit conviction, enabling disciplined,`}</p>
        <p>{`ethical, and intelligent growth for every entity dedicated to meaningful impact."`}</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#76b2ad] content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[64px] px-[48px] relative rounded-[16px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] shrink-0 w-[896px]" data-name="Background+Shadow">
      <Heading24 />
      <Container140 />
    </div>
  );
}

function Container117() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Container118 />
          <Container120 />
          <Container129 />
          <BackgroundShadow1 />
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-gradient-to-b from-[#f6f4ee] relative shrink-0 to-[#fbfbf8] w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[260px] py-[96px] relative w-full">
        <Container117 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute inset-0 opacity-10" data-name="Container">
      <div className="absolute bg-[#c65f39] blur-[32px] right-0 rounded-[9999px] size-[384px] top-0" data-name="Background+Blur" />
      <div className="absolute bg-[#87c5c0] blur-[32px] bottom-0 left-0 rounded-[9999px] size-[384px]" data-name="Background+Blur" />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[#2e261f] text-[0px] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="mb-0">Ready to Explore New Dimensions</p>
        <p className="bg-clip-text text-[transparent]" style={{ backgroundImage: "linear-gradient(126.676deg, rgb(198, 95, 57) 0%, rgb(172, 88, 57) 100%)" }}>
          Of Your Strategic Thinking?
        </p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#756657] text-[20px] text-center whitespace-nowrap">
        <p className="mb-0">Join high-conviction entities leveraging AI with ethics, integrity, and</p>
        <p>human judgment at the core.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12">
            <path d={svgPaths.p3cc1ea80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 5.33076">
            <path d={svgPaths.p13316000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame7 />
    </div>
  );
}

function SvgMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg29 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame8 />
    </div>
  );
}

function SvgMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg30 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#c65f39] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[32px] relative rounded-[6px] shadow-[0px_0px_32px_0px_rgba(198,95,57,0.15)] shrink-0" data-name="Button">
      <SvgMargin10 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Schedule a Consultation</p>
      </div>
      <SvgMargin11 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex items-start justify-center pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[757.031005859375px] right-[138.97px] top-[48.1px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#756657] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[26.4px]">Or reach out directly</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-center left-[calc(50%-0.26px)] top-[91.2px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c65f39] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">info@aanvikshiki.ai</p>
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="h-[119.2px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dad5c8] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container145 />
      <Link9 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Heading25 />
      <Container143 />
      <Container144 />
      <HorizontalBorder10 />
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[512px] py-[96px] relative w-full">
          <Container141 />
          <Container142 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

function Aanvikshiki1() {
  return (
    <div className="h-[48px] max-w-[302px] relative shrink-0 w-[49.96px]" data-name="aanvikshiki">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-252.24%] max-w-none top-0 w-[604.48%]" src={imgAanvikshiki2} />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[662.4019775390625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="mb-0">Explore new dimensions of your strategic</p>
        <p className="mb-0">thinking through intelligence amplified and</p>
        <p>ethics applied.</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Aanvikshiki1 />
      <Container149 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-full">
        <p className="leading-[19.2px]">Solutions</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Medical Research AI</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Small Business Growth</p>
      </div>
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">{`AI Adoption & Culture`}</p>
      </div>
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Data Strategy</p>
      </div>
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link13 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading26 />
      <List6 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-full">
        <p className="leading-[19.2px]">Company</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px] text-[14px]">About Us</p>
      </div>
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Our Mission</p>
      </div>
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Chanakya Code</p>
      </div>
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Case Studies</p>
      </div>
    </div>
  );
}

function Item28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link17 />
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item25 />
      <Item26 />
      <Item27 />
      <Item28 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading27 />
      <List7 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-full">
        <p className="leading-[19.2px]">Resources</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px] text-[14px]">Manifesto</p>
      </div>
    </div>
  );
}

function Item29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px] text-[14px]">White Papers</p>
      </div>
    </div>
  );
}

function Item30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px] text-[14px]">{`Blog & Insights`}</p>
      </div>
    </div>
  );
}

function Item31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link20 />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">
        <p className="leading-[20px]">Contact Us</p>
      </div>
    </div>
  );
}

function Item32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link21 />
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item29 />
      <Item30 />
      <Item31 />
      <Item32 />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading28 />
      <List8 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex gap-[48px] h-[140px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container148 />
      <Container150 />
      <Container151 />
      <Container152 />
    </div>
  );
}

function Container153() {
  return (
    <div className="max-w-[662.4019775390625px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
          <p className="leading-[20px]">© 2025 aanvikshiki.ai. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.peba4c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg31 />
    </div>
  );
}

function Svg32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2ffa5d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg32 />
    </div>
  );
}

function Svg33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pbf3e180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
          <path d={svgPaths.p5272800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg33 />
    </div>
  );
}

function Svg34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg34 />
    </div>
  );
}

function Container154() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Link22 />
        <Link23 />
        <Link24 />
        <Link25 />
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[32.8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container153 />
      <Container154 />
    </div>
  );
}

function Container146() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container147 />
        <HorizontalBorder11 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#76b2ad] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start px-[260px] py-[64px] relative w-full">
        <Container146 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[1200px] relative shrink-0 w-full" data-name="Container">
      <Main />
      <Footer />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="1920w default" style={{ backgroundImage: "linear-gradient(90deg, rgb(246, 244, 238) 0%, rgb(246, 244, 238) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Nav />
      <Container3 />
    </div>
  );
}