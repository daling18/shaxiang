import 'isomorphic-unfetch'

const runtimeArgs = {}

export async function getRuntimeArgs () {
  // TODO: import fetch polyfill
  const args = await fetch('/runtime-args.json').then(res => res.json())
  return Object.assign(runtimeArgs, args)
}

export default runtimeArgs
