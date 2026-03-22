export function SibyMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 128"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 0h80v32H32V0zM0 0h32v128H0V0zM32 96h80v32H32V96zM128 0h32v128h-32V0zM160 0h64v32h-64V0zM160 48h64v32h-64V48zM160 96h64v32h-64V96zM224 16h32v32h-32V16zM224 80h32v32h-32V80z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M32 0h80v32H32V0zM0 0h32v128H0V0zM32 96h80v32H32V96zM128 0h32v128h-32V0zM160 0h64v32h-64V0zM160 48h64v32h-64V48z/></svg>`
}
