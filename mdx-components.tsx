import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
interface MDXComponentMap {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
}

export function useMDXComponents(
  components: MDXComponentMap
): MDXComponentMap {
  return {
    ...themeComponents,
    ...components
  }
}