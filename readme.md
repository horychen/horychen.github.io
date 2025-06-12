# M&M Lab Website

## Environment

This website is built with Next.js. First, clone the repository and install the dependencies:

```bash
git clone git@github.com:motor-and-motion-control-lab/mmlabsite.git
cd mmlabsite
```

> To verify whether you have `npm` (the package manager for Node.js) installed, run:
> 
> ```bash
> npm --version
> ```
> 
> If you don't have `npm` installed, you can install it by following the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). If you have `conda` installed, you can install `npm` by running:
> 
> ```bash
> conda install -c conda-forge nodejs
> npm install -g npm
> ```

Then, install the dependencies:

```bash
npm install
```

## Development

```bash
npm run dev
```

## Deployment

```bash
npm run build
```

## View the website locally

```bash
npx serve@latest out
```