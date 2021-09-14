import React, { useMemo } from 'react';

type IconType =
  | 'twitter'
  | 'youtube'
  | 'ins'
  | 'telephone'
  | 'email'
  | 'location'
  | 'close'
  | 'linkin'
  | 'facebook';

export const useCommonSvg = () => {
  const renderSvgIcon = useMemo(
    () => (name: IconType, className?: string, style?: any) => {
      switch (name) {
        case 'twitter': {
          return (
            <a href="https://twitter.com/YouLand_Inc">
              <svg
                className={className}
                style={style}
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0C6.71652 0 0 6.87068 0 15.3443C0 23.8179 6.71652 30.6886 15 30.6886C23.2835 30.6886 30 23.8179 30 15.3443C30 6.87068 23.2835 0 15 0ZM22.2087 11.5664C22.2187 11.7274 22.2187 11.8952 22.2187 12.0596C22.2187 17.0876 18.4754 22.8794 11.635 22.8794C9.52567 22.8794 7.57031 22.2526 5.92299 21.1737C6.22433 21.208 6.51228 21.2217 6.82031 21.2217C8.56138 21.2217 10.1618 20.6189 11.4375 19.5982C9.80357 19.564 8.4308 18.4679 7.96205 16.9609C8.5346 17.0465 9.05022 17.0465 9.63951 16.8924C8.79819 16.7176 8.04199 16.2502 7.49938 15.5696C6.95678 14.889 6.66123 14.0373 6.66295 13.1591V13.1111C7.15513 13.3954 7.73438 13.5701 8.3404 13.5941C7.83095 13.2468 7.41314 12.7762 7.12403 12.2242C6.83493 11.6721 6.68345 11.0556 6.68304 10.4293C6.68304 9.72033 6.86384 9.07299 7.18862 8.51128C8.12244 9.68723 9.28771 10.649 10.6087 11.3341C11.9297 12.0192 13.3768 12.4123 14.856 12.4878C14.3304 9.90186 16.2188 7.80914 18.4888 7.80914C19.5603 7.80914 20.5246 8.2681 21.2042 9.00792C22.0446 8.84694 22.8482 8.52498 23.5647 8.09342C23.2868 8.97367 22.7042 9.71691 21.9308 10.1861C22.6808 10.1039 23.404 9.89158 24.0737 9.5936C23.5681 10.354 22.9353 11.0287 22.2087 11.5664Z" />
              </svg>
            </a>
          );
        }
        case 'youtube': {
          return (
            <a href="https://www.youtube.com/watch?v=Dvb38tks_20">
              <svg
                style={style}
                className={className}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.1316 17.8102L18.0109 15L13.1316 12.1898V17.8102Z" />
                <path d="M15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C23.283 30 30 23.283 30 15C30 6.717 23.283 0 15 0ZM24.3727 15.0153C24.3727 15.0153 24.3727 18.0574 23.9868 19.5243C23.7705 20.3272 23.1374 20.9603 22.3345 21.1764C20.8676 21.5625 15 21.5625 15 21.5625C15 21.5625 9.14772 21.5625 7.66548 21.161C6.86256 20.945 6.22948 20.3117 6.01318 19.5087C5.62706 18.0574 5.62706 15 5.62706 15C5.62706 15 5.62706 11.9582 6.01318 10.4913C6.22925 9.68834 6.8779 9.03969 7.66548 8.82362C9.13239 8.4375 15 8.4375 15 8.4375C15 8.4375 20.8676 8.4375 22.3345 8.83896C23.1374 9.05502 23.7705 9.68834 23.9868 10.4913C24.3883 11.9582 24.3727 15.0153 24.3727 15.0153Z" />
              </svg>
            </a>
          );
        }
        case 'ins': {
          return (
            <svg
              style={style}
              className={className}
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.08125 0.0843939C9.5475 0.0153443 10.015 0 13.75 0C17.485 0 17.9525 0.016623 19.4175 0.0843939C20.8825 0.152165 21.8825 0.391281 22.7575 0.737808C23.6737 1.092 24.505 1.64568 25.1925 2.36175C25.8925 3.06376 26.4325 3.91281 26.7775 4.85138C27.1175 5.74647 27.35 6.76942 27.4175 8.2655C27.485 9.76796 27.5 10.2462 27.5 14.0657C27.5 17.8864 27.4837 18.3646 27.4175 19.8645C27.3512 21.3606 27.1175 22.3836 26.7775 23.2787C26.4325 24.2173 25.8916 25.0678 25.1925 25.7708C24.505 26.4869 23.6737 27.0393 22.7575 27.3922C21.8825 27.74 20.8825 27.9779 19.42 28.0469C17.9525 28.116 17.485 28.1313 13.75 28.1313C10.015 28.1313 9.5475 28.1147 8.08125 28.0469C6.61875 27.9792 5.61875 27.74 4.74375 27.3922C3.82615 27.0393 2.99478 26.486 2.3075 25.7708C1.60797 25.0684 1.06664 24.2184 0.72125 23.2799C0.3825 22.3849 0.15 21.3619 0.0825 19.8658C0.015 18.3634 0 17.8851 0 14.0657C0 10.2449 0.01625 9.76667 0.0825 8.26804C0.14875 6.76941 0.3825 5.74647 0.72125 4.85138C1.06715 3.91292 1.6089 3.06287 2.30875 2.36047C2.99505 1.64504 3.82559 1.0913 4.7425 0.737808C5.6175 0.391281 6.6175 0.153444 8.08 0.0843939H8.08125ZM19.3062 2.61621C17.8562 2.54844 17.4212 2.53437 13.75 2.53437C10.0787 2.53437 9.64375 2.54844 8.19375 2.61621C6.8525 2.67886 6.125 2.90775 5.64 3.10083C4.99875 3.35657 4.54 3.65963 4.05875 4.15193C3.60256 4.60593 3.25148 5.15863 3.03125 5.76947C2.8425 6.26561 2.61875 7.00982 2.5575 8.38186C2.49125 9.86514 2.4775 10.3101 2.4775 14.0657C2.4775 17.8212 2.49125 18.2662 2.5575 19.7495C2.61875 21.1215 2.8425 21.8657 3.03125 22.3618C3.25125 22.9718 3.6025 23.5255 4.05875 23.9794C4.5025 24.4461 5.04375 24.8054 5.64 25.0305C6.125 25.2236 6.8525 25.4524 8.19375 25.5151C9.64375 25.5829 10.0775 25.5969 13.75 25.5969C17.4225 25.5969 17.8562 25.5829 19.3062 25.5151C20.6475 25.4524 21.375 25.2236 21.86 25.0305C22.5013 24.7747 22.96 24.4717 23.4412 23.9794C23.8975 23.5255 24.2488 22.9718 24.4688 22.3618C24.6575 21.8657 24.8813 21.1215 24.9425 19.7495C25.0088 18.2662 25.0225 17.8212 25.0225 14.0657C25.0225 10.3101 25.0088 9.86514 24.9425 8.38186C24.8813 7.00982 24.6575 6.26561 24.4688 5.76947C24.2188 5.1135 23.9225 4.64423 23.4412 4.15193C22.9974 3.6853 22.4571 3.32615 21.86 3.10083C21.375 2.90775 20.6475 2.67886 19.3062 2.61621ZM11.9938 18.4017C12.9746 18.8194 14.0667 18.8758 15.0837 18.5612C16.1006 18.2466 16.9792 17.5807 17.5695 16.6771C18.1598 15.7734 18.4251 14.6882 18.3201 13.6067C18.215 12.5253 17.7463 11.5146 16.9937 10.7474C16.514 10.257 15.934 9.88152 15.2954 9.64794C14.6568 9.41437 13.9755 9.32854 13.3006 9.39664C12.6257 9.46474 11.9739 9.68506 11.3923 10.0418C10.8106 10.3985 10.3134 10.8827 9.93663 11.4595C9.55983 12.0363 9.31274 12.6914 9.21314 13.3777C9.11355 14.0639 9.16394 14.7642 9.36067 15.4281C9.55741 16.0921 9.8956 16.7031 10.3509 17.2173C10.8062 17.7315 11.3673 18.136 11.9938 18.4017ZM8.7525 8.95342C9.40878 8.28208 10.1879 7.74954 11.0454 7.38621C11.9028 7.02287 12.8219 6.83588 13.75 6.83588C14.6781 6.83588 15.5972 7.02287 16.4546 7.3862C17.3121 7.74953 18.0912 8.28208 18.7475 8.95342C19.4038 9.62477 19.9244 10.4218 20.2795 11.2989C20.6347 12.1761 20.8175 13.1162 20.8175 14.0657C20.8175 15.0151 20.6347 15.9552 20.2795 16.8324C19.9244 17.7095 19.4038 18.5065 18.7475 19.1779C17.4221 20.5337 15.6244 21.2954 13.75 21.2954C11.8756 21.2954 10.0779 20.5337 8.7525 19.1779C7.42708 17.822 6.68247 15.9831 6.68247 14.0657C6.68247 12.1482 7.42708 10.3093 8.7525 8.95342ZM22.385 7.91257C22.5476 7.75563 22.6778 7.56692 22.7679 7.35758C22.8579 7.14825 22.906 6.92256 22.9093 6.69388C22.9125 6.4652 22.8709 6.23817 22.7869 6.02626C22.7028 5.81433 22.578 5.6218 22.42 5.46008C22.2619 5.29837 22.0737 5.17073 21.8665 5.08475C21.6593 4.99878 21.4374 4.95619 21.2138 4.95953C20.9903 4.96286 20.7697 5.01204 20.565 5.10417C20.3604 5.19629 20.1759 5.32947 20.0225 5.49583C19.7241 5.81938 19.5608 6.24915 19.5671 6.69388C19.5735 7.13862 19.749 7.56333 20.0564 7.87784C20.3639 8.19236 20.7791 8.37191 21.2138 8.3784C21.6486 8.38488 22.0687 8.21778 22.385 7.91257Z"
              />
            </svg>
          );
        }
        case 'telephone': {
          return (
            <svg
              style={style}
              className={className}
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.6832 16.2C14.4228 17.9647 16.5276 19.3272 18.8499 20.1917L21.9915 17.6917C22.0847 17.6276 22.1951 17.5932 22.3082 17.5932C22.4213 17.5932 22.5317 17.6276 22.6249 17.6917L28.4582 21.45C28.6797 21.5832 28.8671 21.766 29.0058 21.984C29.1445 22.2021 29.2305 22.4494 29.2572 22.7064C29.2839 22.9634 29.2504 23.2231 29.1595 23.465C29.0685 23.7068 28.9226 23.9242 28.7332 24.1L25.9999 26.8C25.6084 27.1868 25.1273 27.4706 24.5995 27.6262C24.0717 27.7818 23.5135 27.8043 22.9749 27.6917C17.6017 26.582 12.6492 23.9829 8.68321 20.1917C4.80528 16.3627 2.12177 11.4907 0.958207 6.16669C0.843262 5.63639 0.867253 5.08539 1.02785 4.56709C1.18845 4.04879 1.48022 3.58076 1.87487 3.20836L4.70821 0.475027C4.88354 0.29485 5.09736 0.156673 5.33366 0.0708417C5.56996 -0.0149893 5.82262 -0.0462498 6.07272 -0.020599C6.32281 0.00505169 6.56386 0.0869489 6.77782 0.21896C6.99178 0.350972 7.1731 0.529676 7.30821 0.741693L11.1915 6.50003C11.2585 6.59045 11.2947 6.7 11.2947 6.81253C11.2947 6.92506 11.2585 7.03461 11.1915 7.12503L8.63321 10.2C9.52119 12.4758 10.9047 14.5254 12.6832 16.2Z" />
            </svg>
          );
        }
        case 'email': {
          return (
            <svg
              style={style}
              className={className}
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 0H3C1.625 0 0.5125 1.125 0.5125 2.5L0.5 17.5C0.5 18.875 1.625 20 3 20H23C24.375 20 25.5 18.875 25.5 17.5V2.5C25.5 1.125 24.375 0 23 0ZM23 5L13 11.25L3 5V2.5L13 8.75L23 2.5V5Z" />
            </svg>
          );
        }
        case 'location': {
          return (
            <svg
              style={style}
              className={className}
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.5 15.71L18.255 6.8C19.44 6.155 20.25 4.925 20.25 3.5C20.25 2.50544 19.8549 1.55161 19.1516 0.84835C18.4484 0.145088 17.4946 -0.25 16.5 -0.25C15.5054 -0.25 14.5516 0.145088 13.8483 0.84835C13.1451 1.55161 12.75 2.50544 12.75 3.5C12.75 4.925 13.56 6.155 14.745 6.8L16.5 15.71ZM16.5 1.25C17.745 1.25 18.75 2.255 18.75 3.5C18.75 4.745 17.745 5.75 16.5 5.75C15.255 5.75 14.25 4.745 14.25 3.5C14.25 2.255 15.255 1.25 16.5 1.25ZM19.08 8.45L24 6.455V19.955L16.68 23L7.5 19.955L0 22.955V9.455L7.5 6.455L13.905 8.57L16.5 19.52L19.08 8.45Z" />
            </svg>
          );
        }
        case 'close': {
          return (
            <svg
              style={style}
              className={className}
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="15.1736"
                y1="1.27279"
                x2="10.6644"
                y2="5.78195"
                stroke="#051229"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="7.97192"
                y1="8.47421"
                x2="2.27282"
                y2="14.1733"
                stroke="#051229"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="0.9"
                y1="-0.9"
                x2="19.5423"
                y2="-0.9"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.54541 0)"
                stroke="#051229"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          );
        }
        case 'linkin': {
          return (
            <a href="https://www.linkedin.com/company/18027538/admin/">
              <svg
                style={style}
                className={className}
                preserveAspectRatio="none"
                viewBox="0 0 33 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.5081 0C7.82496 0 0.786133 6.86976 0.786133 15.3443C0.786133 23.8188 7.82496 30.6886 16.5081 30.6886C25.1912 30.6886 32.23 23.8188 32.23 15.3443C32.23 6.86976 25.1912 0 16.5081 0ZM12.6594 21.7042H9.47577V11.7048H12.6594V21.7042ZM11.048 10.4773C10.0424 10.4773 9.39225 9.78198 9.39225 8.92206C9.39225 8.04456 10.0621 7.37005 11.0889 7.37005C12.1158 7.37005 12.7446 8.04456 12.7642 8.92206C12.7642 9.78198 12.1158 10.4773 11.048 10.4773ZM24.2872 21.7042H21.1035V16.1626C21.1035 14.8728 20.6416 13.9969 19.4903 13.9969C18.6109 13.9969 18.0884 14.5899 17.8575 15.1605C17.7723 15.3635 17.751 15.6512 17.751 15.9373V21.7026H14.5658V14.8935C14.5658 13.6452 14.5248 12.6015 14.4822 11.7032H17.2482L17.394 13.0922H17.4579C17.8771 12.4401 18.904 11.4778 20.622 11.4778C22.7165 11.4778 24.2872 12.8476 24.2872 15.7918V21.7042Z" />
              </svg>
            </a>
          );
        }
        case 'facebook': {
          return (
            <a href="https://www.facebook.com/YouLand-984516721727740/?ref=pages_you_manage">
              <svg
                style={style}
                className={className}
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.7544 15.4383C31.7544 6.91174 24.7158 0 16.0345 0C7.34916 0.0019178 0.310547 6.91174 0.310547 15.4402C0.310547 23.144 6.06012 29.5302 13.5743 30.6886V19.901H9.58533V15.4402H13.5782V12.0361C13.5782 8.16789 15.9264 6.03147 19.5165 6.03147C21.2378 6.03147 23.0358 6.33256 23.0358 6.33256V10.1298H21.053C19.1018 10.1298 18.4927 11.3207 18.4927 12.5424V15.4383H22.851L22.1554 19.8991H18.4907V30.6867C26.0048 29.5283 31.7544 23.142 31.7544 15.4383Z" />
              </svg>
            </a>
          );
        }
      }
    },
    [],
  );
  return {
    renderSvgIcon,
  };
};