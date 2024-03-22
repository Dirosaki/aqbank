import { IconType } from '@/@types/icons'

export function Download({ size, color, className }: IconType) {
  return (
    <svg
      className={className}
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.0009 13V18.585L14.8289 16.757L16.2439 18.172L12.0009 22.414L7.75787 18.172L9.17287 16.757L11.0009 18.585V13H13.0009ZM12.0009 2C13.7179 2.00008 15.3749 2.63111 16.6571 3.77312C17.9392 4.91512 18.757 6.48846 18.9549 8.194C20.1991 8.53332 21.2846 9.2991 22.0215 10.3575C22.7585 11.416 23.1 12.6997 22.9865 13.9844C22.873 15.2691 22.3116 16.473 21.4004 17.3858C20.4893 18.2986 19.2864 18.8622 18.0019 18.978V16.964C18.462 16.8983 18.9045 16.7416 19.3035 16.503C19.7024 16.2644 20.0498 15.9487 20.3254 15.5744C20.6011 15.2001 20.7993 14.7746 20.9087 14.3228C21.0181 13.8711 21.0364 13.402 20.9626 12.9431C20.8887 12.4841 20.7242 12.0445 20.4786 11.6498C20.233 11.2552 19.9112 10.9134 19.5321 10.6445C19.1529 10.3755 18.724 10.1848 18.2704 10.0834C17.8167 9.98203 17.3474 9.97203 16.8899 10.054C17.0465 9.32489 17.038 8.56997 16.8651 7.84455C16.6922 7.11913 16.3592 6.44158 15.8905 5.86153C15.4218 5.28147 14.8293 4.81361 14.1563 4.49219C13.4834 4.17078 12.7471 4.00397 12.0014 4.00397C11.2556 4.00397 10.5193 4.17078 9.8464 4.49219C9.17347 4.81361 8.58097 5.28147 8.11227 5.86153C7.64358 6.44158 7.31058 7.11913 7.13765 7.84455C6.96473 8.56997 6.95626 9.32489 7.11287 10.054C6.20053 9.88267 5.25749 10.0808 4.49121 10.6048C3.72494 11.1287 3.1982 11.9357 3.02687 12.848C2.85554 13.7603 3.05366 14.7034 3.57763 15.4697C4.10161 16.2359 4.90853 16.7627 5.82087 16.934L6.00087 16.964V18.978C4.71632 18.8623 3.51328 18.2989 2.602 17.3862C1.69073 16.4735 1.1292 15.2696 1.01554 13.9848C0.901892 12.7001 1.24335 11.4163 1.98024 10.3578C2.71713 9.29926 3.80258 8.53339 5.04687 8.194C5.24458 6.48838 6.06228 4.91491 7.34445 3.77287C8.62662 2.63082 10.2838 1.99986 12.0009 2Z" />
    </svg>
  )
}
