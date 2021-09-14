export const flexCenterV = {
  display: 'flex',
  alignItems: 'center',
};

export const flexCenter = {
  ...flexCenterV,
  justifyContent: 'center',
};

export const absoluteCenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const size = <T extends number | string, X extends number | string>(
  width: T,
  height?: X,
): { width: T; height: X | T } => {
  return {
    width,
    height: height || width,
  };
};

export const textEllipsis = (line = 1): any => {
  return {
    display: '-webkit-box',
    overflow: 'hidden',
    '-webkit-line-clamp': line,
    '-webkit-box-orient': 'vertical',
  };
};
