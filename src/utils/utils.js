export function getMaskSettings() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;

  if (isMobile) {
    return {
      initialMaskPos: '50% -1500vh',
      initialMaskSize: '3100% 3100%',
      maskPos: '50% 7vh',
      maskSize: '50% 50%',
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: '50% -1700vh',
      initialMaskSize: '5500% 5500%',
      maskPos: '50% 17vh',
      maskSize: '30% 30%',
    };
  }

  return {
    initialMaskPos: '50% 22%',
    initialMaskSize: '5500% 5500%',
    maskPos: '50% 22%',
    maskSize: '20% 20%',
  };
}
