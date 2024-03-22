import { IconType } from '@/@types/icons'

export function Store({ size, color, className }: IconType) {
  return (
    <svg
      className={className}
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 13.242V20H22V22H2V20H3V13.242C2.38437 12.8311 1.87971 12.2745 1.53082 11.6218C1.18193 10.969 0.999592 10.2402 1 9.5C1 8.673 1.224 7.876 1.633 7.197L4.345 2.5C4.43277 2.34798 4.559 2.22175 4.71101 2.13398C4.86303 2.04621 5.03547 2 5.211 2H18.79C18.9655 2 19.138 2.04621 19.29 2.13398C19.442 2.22175 19.5682 2.34798 19.656 2.5L22.358 7.182C22.9546 8.17287 23.1463 9.35553 22.8934 10.4841C22.6405 11.6127 21.9624 12.6005 21 13.242ZM19 13.972C18.3124 14.0491 17.6163 13.9665 16.9659 13.7307C16.3155 13.4948 15.7283 13.1119 15.25 12.612C14.8302 13.0511 14.3258 13.4005 13.7672 13.6393C13.2086 13.878 12.6075 14.001 12 14.001C11.3927 14.0013 10.7916 13.8786 10.233 13.6402C9.67445 13.4018 9.16996 13.0527 8.75 12.614C8.27163 13.1138 7.68437 13.4964 7.03395 13.7321C6.38353 13.9678 5.68749 14.0503 5 13.973V20H19V13.973V13.972ZM5.789 4L3.356 8.213C3.11958 8.79714 3.11248 9.44903 3.33613 10.0382C3.55978 10.6273 3.99768 11.1103 4.56218 11.3904C5.12668 11.6705 5.77614 11.7271 6.38058 11.5488C6.98502 11.3706 7.49984 10.9706 7.822 10.429C8.157 9.592 9.342 9.592 9.678 10.429C9.8633 10.8934 10.1836 11.2916 10.5975 11.5721C11.0115 11.8526 11.5 12.0025 12 12.0025C12.5 12.0025 12.9885 11.8526 13.4025 11.5721C13.8164 11.2916 14.1367 10.8934 14.322 10.429C14.657 9.592 15.842 9.592 16.178 10.429C16.3078 10.7484 16.5022 11.0376 16.7491 11.2783C16.996 11.519 17.2901 11.706 17.6127 11.8275C17.9354 11.9491 18.2797 12.0026 18.6241 11.9847C18.9684 11.9668 19.3053 11.8778 19.6136 11.7234C19.9219 11.569 20.1949 11.3525 20.4155 11.0875C20.6361 10.8225 20.7995 10.5148 20.8955 10.1836C20.9914 9.85238 21.0178 9.50493 20.973 9.16305C20.9281 8.82118 20.8131 8.49227 20.635 8.197L18.21 4H5.79H5.789Z" />
    </svg>
  )
}
