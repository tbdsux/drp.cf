interface howTo {
  method: number
  process: string
  description: string
}

export const HowTos: howTo[] = [
  {
    method: 1,
    process: 'Give us your package',
    description:
      "The package (or order) should be wrapped perfectly. It should also include the receiver's fullname and contact number.",
  },
  {
    method: 2,
    process: 'We will store it safely',
    description:
      'All packages are available within three (3) days, the receiver should get the package (before or after) from the dropping area.',
  },
  {
    method: 3,
    process: 'The receiver can get it',
    description:
      "If the package is not received within the given days, it will be disposed or returned to the sender and won't be available anymore.",
  },
]
