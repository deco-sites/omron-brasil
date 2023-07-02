export type AvailableIcons =
  | "CheckCircle"
  | "Play"
  | "Map"
  | "PairingWatchMobile"
  | "Distance"
  | "CheckShield";

export interface InfoProps {
  iconId: AvailableIcons;
  label: string;
}

export interface IconProps {
  icon: AvailableIcons;
}

export interface Props {
  title: string;
  infos: InfoProps[];
}

function Icon({ icon }: IconProps) {
  return (
    <>
    {!icon || icon === "CheckCircle" && (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_8767_153015)">
          <path d="M39.59 17.5C40.43 19.5 40.9 21.7 40.9 24C40.9 33.32 33.32 40.9 24 40.9C14.68 40.9 7.1 33.32 7.1 24C7.1 14.68 14.68 7.1 24 7.1C28.71 7.1 32.96 9.04 36.03 12.15L37.52 10.67C34.07 7.17 29.29 5 24 5C13.52 5 5 13.52 5 24C5 34.48 13.52 43 24 43C34.48 43 43 34.48 43 24C43 21.11 42.33 18.38 41.17 15.92L39.59 17.5Z" fill="#005EB8"/>
          <path d="M20.62 33C20.61 33 20.6 33 20.6 33C20.31 32.99 20.04 32.87 19.85 32.66L11 23.04L12.55 21.62L20.65 30.44L41.52 9.65L43 11.14L21.36 32.69C21.16 32.89 20.89 33 20.62 33Z" fill="#005EB8"/>
        </g>
        <defs>
        <clipPath id="clip0_8767_153015">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    )}
    {icon === "Play" && (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_8767_153019)">
          <path d="M15 40.01C14.83 40.01 14.65 39.97 14.5 39.88C14.19 39.7 14 39.37 14 39.01V8.98999C14 8.62999 14.19 8.29999 14.5 8.11999C14.81 7.93999 15.19 7.93999 15.5 8.11999L41.5 23.13C41.81 23.31 42 23.64 42 24C42 24.36 41.81 24.69 41.5 24.87L15.5 39.88C15.35 39.97 15.17 40.01 15 40.01ZM16 10.72V37.28L39 24L16 10.72Z" fill="#005EB8"/>
        </g>
        <defs>
          <clipPath id="clip0_8767_153019">
            <rect width="48" height="48" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )}
    {icon === "Distance" && (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.55 46.0002H7.5V43.8002H35.55C36.3445 43.8002 37.1312 43.6437 37.8652 43.3397C38.5993 43.0356 39.2662 42.59 39.828 42.0282C40.3898 41.4664 40.8354 40.7994 41.1395 40.0654C41.4435 39.3314 41.6 38.5447 41.6 37.7502C41.6 36.9557 41.4435 36.169 41.1395 35.435C40.8354 34.7009 40.3898 34.034 39.828 33.4722C39.2662 32.9104 38.5993 32.4648 37.8652 32.1607C37.1312 31.8567 36.3445 31.7002 35.55 31.7002H21.8C20.3413 31.7002 18.9424 31.1207 17.9109 30.0893C16.8795 29.0578 16.3 27.6589 16.3 26.2002C16.3 24.7415 16.8795 23.3426 17.9109 22.3111C18.9424 21.2797 20.3413 20.7002 21.8 20.7002H26.2V22.9002H21.8C21.3666 22.9002 20.9375 22.9856 20.5371 23.1514C20.1368 23.3172 19.773 23.5603 19.4665 23.8667C19.1601 24.1732 18.917 24.537 18.7512 24.9373C18.5854 25.3377 18.5 25.7668 18.5 26.2002C18.5 26.6336 18.5854 27.0627 18.7512 27.4631C18.917 27.8634 19.1601 28.2272 19.4665 28.5336C19.773 28.8401 20.1368 29.0832 20.5371 29.249C20.9375 29.4148 21.3666 29.5002 21.8 29.5002H35.55C37.738 29.5002 39.8365 30.3694 41.3836 31.9166C42.9308 33.4637 43.8 35.5622 43.8 37.7502C43.8 39.9382 42.9308 42.0367 41.3836 43.5838C39.8365 45.131 37.738 46.0002 35.55 46.0002Z" fill="#005EB8"/>
        <path d="M8.59958 41.5987C8.406 41.5988 8.21577 41.5481 8.04798 41.4516C7.88019 41.3551 7.74072 41.2161 7.64358 41.0487L3.75958 34.3067C3.3098 33.4705 3.08422 32.5321 3.10481 31.5829C3.12539 30.6337 3.39145 29.7059 3.87706 28.8901C4.36267 28.0742 5.05128 27.398 5.87584 26.9273C6.7004 26.4566 7.6328 26.2075 8.58225 26.2041C9.53169 26.2008 10.4658 26.4434 11.2937 26.9083C12.1215 27.3732 12.8148 28.0446 13.3062 28.857C13.7975 29.6695 14.07 30.5953 14.0973 31.5444C14.1245 32.4934 13.9055 33.4334 13.4616 34.2727L9.55558 41.0507C9.45844 41.2181 9.31898 41.3571 9.15119 41.4536C8.98339 41.5501 8.79316 41.5988 8.59958 41.5987ZM8.59958 28.3887C8.0301 28.3895 7.47051 28.5375 6.9751 28.8184C6.47968 29.0992 6.06527 29.5034 5.77207 29.9916C5.47887 30.4798 5.31683 31.0355 5.30167 31.6047C5.28652 32.174 5.41877 32.7375 5.68558 33.2407L8.59958 38.3007L11.5376 33.1987C11.7936 32.695 11.9165 32.1342 11.8945 31.5696C11.8724 31.005 11.7062 30.4554 11.4117 29.9732C11.1172 29.4911 10.7042 29.0923 10.2119 28.8149C9.71966 28.5376 9.1646 28.3908 8.59958 28.3887Z" fill="#005EB8"/>
        <path d="M30.5996 22.9003H28.3996V3.65034C28.3957 3.44091 28.4528 3.23486 28.564 3.05731C28.6751 2.87976 28.8355 2.73836 29.0256 2.65034C29.9577 2.16622 31.0029 1.94171 32.0516 2.00034C33.2321 2.04284 34.4033 2.22751 35.5396 2.55034C36.6679 2.86655 37.8289 3.05111 38.9996 3.10034C40.4909 3.17117 41.9833 2.98513 43.4116 2.55034C43.5782 2.48974 43.757 2.47009 43.9328 2.49305C44.1087 2.51601 44.2764 2.58092 44.4219 2.68229C44.5674 2.78366 44.6864 2.91853 44.7688 3.07552C44.8512 3.23251 44.8947 3.40702 44.8956 3.58434V14.0123C44.8951 14.237 44.8264 14.4561 44.6985 14.6408C44.5707 14.8254 44.3897 14.9669 44.1796 15.0463C42.5087 15.571 40.7594 15.8018 39.0096 15.7283C37.5732 15.7012 36.1463 15.4902 34.7636 15.1003C33.8791 14.8409 32.9665 14.6898 32.0456 14.6503C31.5511 14.6727 31.0622 14.7649 30.5936 14.9243V22.9003M32.0456 12.4503C33.1448 12.4884 34.2351 12.6624 35.2916 12.9683C36.5025 13.3102 37.7517 13.4984 39.0096 13.5283C40.2523 13.5666 41.495 13.4565 42.7116 13.2003V5.02634C41.4854 5.23266 40.2428 5.32439 38.9996 5.30034C37.6529 5.26187 36.3158 5.0604 35.0176 4.70034C34.0514 4.42018 33.0562 4.2524 32.0516 4.20034C31.5609 4.16778 31.0684 4.22747 30.5996 4.37634V12.6383C31.0752 12.5224 31.5622 12.4594 32.0516 12.4503" fill="#005EB8"/>
      </svg>
    )}
    {icon === "Map" && (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.8764 40.53L34.5864 30.53C34.4164 30.21 34.0764 30 33.7064 30H30.1564L28.9964 32H33.0964L37.3364 40H10.6564L14.8964 32H18.9064L17.7564 30H14.3064C13.9364 30 13.5964 30.21 13.4264 30.53L8.13638 40.53C7.97638 40.84 7.98638 41.21 8.16638 41.51C8.31638 41.82 8.64638 42 8.99638 42H38.9964C39.3464 42 39.6764 41.82 39.8564 41.52C40.0364 41.22 40.0464 40.84 39.8764 40.53Z" fill="#005EB8"/>
        <path d="M23.9464 35.77C23.5864 35.77 23.2564 35.58 23.0764 35.27L14.9064 21.1C14.1064 19.6 13.6964 17.94 13.6964 16.25C13.6964 10.6 18.2964 6 23.9464 6C29.5964 6 34.1964 10.6 34.1964 16.25C34.1964 17.93 33.7864 19.6 33.0064 21.06L24.8164 35.26C24.6364 35.58 24.3064 35.77 23.9464 35.77ZM23.9464 8C19.3964 8 15.6964 11.7 15.6964 16.25C15.6964 17.61 16.0264 18.95 16.6564 20.13L23.9464 32.77L31.2564 20.1C31.8664 18.95 32.1964 17.61 32.1964 16.25C32.1964 11.7 28.4964 8 23.9464 8Z" fill="#005EB8"/>
        <path d="M23.9464 22.38C20.5564 22.38 17.8064 19.63 17.8064 16.24C17.8064 12.85 20.5564 10.1 23.9464 10.1C27.3264 10.1 30.0864 12.85 30.0864 16.24C30.0864 19.63 27.3364 22.38 23.9464 22.38ZM23.9464 12.1C21.6664 12.1 19.8064 13.96 19.8064 16.24C19.8064 18.52 21.6664 20.38 23.9464 20.38C26.2264 20.38 28.0864 18.52 28.0864 16.24C28.0864 13.96 26.2264 12.1 23.9464 12.1Z" fill="#005EB8"/>
      </svg> 
    )}
    {icon === "CheckShield" && (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.35 5L9 8.62V26.03C9 38.78 23.92 42.86 24.07 42.9L24.35 42.97L24.63 42.9C24.78 42.86 39.7 38.78 39.7 26.03V8.62L24.35 5ZM37.5 26.04C37.5 36.19 26.28 40.1 24.35 40.7C22.42 40.11 11.2 36.21 11.2 26.04V10.37L24.35 7.26L37.5 10.37V26.04ZM16.43 23.18L14.81 24.67L20.58 30.95L34.26 17.32L32.71 15.76L20.65 27.77L16.43 23.18Z" fill="#005EB8"/>
      </svg>
    )}
    {icon === "PairingWatchMobile" && (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_8767_153021)">
          <path d="M12.95 17.05V11C12.95 10.48 12.52 10.05 12 10.05H6C5.48 10.05 5.05 10.48 5.05 11V17.05C2.63 18.43 1 21.02 1 24C1 26.98 2.63 29.5701 5.05 30.9501V37C5.05 37.5201 5.48 37.9501 6 37.9501H12C12.52 37.9501 12.95 37.5201 12.95 37V30.9501C15.37 29.5701 17 26.98 17 24C17 21.02 15.37 18.43 12.95 17.05ZM6.95 11.95H11.05V16.27C10.39 16.1 9.71 16 9 16C8.29 16 7.61 16.1 6.95 16.28V11.95ZM11.05 36.05H6.95V31.73C7.61 31.9 8.29 32 9 32C9.71 32 10.39 31.9 11.05 31.72V36.05ZM9 30.1C5.64 30.1 2.9 27.36 2.9 24C2.9 20.64 5.64 17.9 9 17.9C12.36 17.9 15.1 20.64 15.1 24C15.1 27.36 12.36 30.1 9 30.1Z" fill="#005EB8"/>
          <path d="M42.58 10.05H36.35C33.73 10.05 31.97 11.81 31.97 14.42V33.5801C31.97 36.1901 33.73 37.9501 36.35 37.9501H42.58C45.2 37.9501 46.95 36.1901 46.95 33.5801V14.42C46.95 11.81 45.19 10.05 42.58 10.05ZM36.35 11.95H42.58C44.13 11.95 45.05 12.87 45.05 14.42V14.9H33.87V14.42C33.87 12.87 34.8 11.95 36.35 11.95ZM45.05 16.8V31.08H33.87V16.8H45.05ZM42.58 36.05H36.35C34.8 36.05 33.88 35.1301 33.88 33.5801V32.98H45.06V33.5801C45.05 35.1301 44.12 36.05 42.58 36.05Z" fill="#005EB8"/>
          <path d="M41.52 12.83H37.41V14.03H41.52V12.83Z" fill="#005EB8"/>
          <path d="M25.59 16.64C27.16 18.68 28.1 21.23 28.1 24C28.1 26.7701 27.16 29.3101 25.59 31.3601L27.1 32.5201C28.91 30.1501 30 27.21 30 24C30 20.79 28.91 17.85 27.1 15.49L25.59 16.64Z" fill="#005EB8"/>
          <path d="M22.02 19.38C23.01 20.66 23.6 22.26 23.6 24C23.6 25.74 23.01 27.34 22.02 28.62L23.53 29.78C24.76 28.18 25.5 26.18 25.5 24C25.5 21.82 24.76 19.82 23.53 18.22L22.02 19.38Z" fill="#005EB8"/>
          <path d="M18.45 22.12C18.85 22.64 19.1 23.29 19.1 24C19.1 24.71 18.85 25.36 18.45 25.88L19.95 27.03C20.6 26.19 21 25.15 21 24C21 22.85 20.6 21.81 19.95 20.97L18.45 22.12Z" fill="#005EB8"/>
        </g>
        <defs>
          <clipPath id="clip0_8767_153021">
            <rect width="48" height="48" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )}
    </>
  )
}

function ConcernIcon({ iconId, label }: InfoProps) {
  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <Icon icon={iconId} />
      <h2 class="text-black font-bold">{label}</h2>
    </div>
  )
}

export default function ConcernSection({ title, infos }: Props) {
  return (
    <section class="flex justify-center items-center lg:items-start w-full h-full py-14 lg:py-0 md:min-h-[829px] bg-white">
      <div class="flex flex-col gap-16 items-center text-center max-w-5xl w-full h-full lg:py-16">
        <h1 class="text-black font-bold text-xl">{title}</h1>

        <div class="flex flex-col items-center justify-between h-full w-[85%] lg:w-full border-b border-b-[#C9C9C9] pt-12 pb-[60px] lg:pb-20">
          <div class="grid grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-y-12 gap-x-8 lg:max-w-[620px]">
            {infos?.map((info) => (
              <ConcernIcon {...info} />
            ))}
          </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-8 md:pb-20 lg:pt-8 px-6 lg:px-0">
          <div class="flex flex-col gap-3">
            <h1 class="font-bold text-2xl">Need to contact us?</h1>
            <span>Contact us for all your product questions or concerns.</span>
          </div>

          <button class="flex items-center justify-center gap-2 btn bg-[#005EB8] hover:bg-[#005EB8] w-full max-w-[153px] rounded-xl text-white">
            <span class="text-xs font-bold">Download</span>
          </button>
        </div>
      </div>
    </section>
  )
}
