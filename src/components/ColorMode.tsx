'use client';
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';

type ColorMode = 'dark' | 'light';
export const themeKey = 'vanilla-theme-pref';

interface ColorModeContextValues {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  setColorMode: () => {},
});

// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props
export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setColorMode(
      document.documentElement.getAttribute('data-theme') === ' dark'
        ? 'dark'
        : 'light'
    );
  }, []);

  const setter = (c: ColorMode) => {
    setColorMode(c);

    document.documentElement.removeAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', c);

    try {
      localStorage.setItem(themeKey, c);
    } catch (e) {}
  };

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: setter,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return (
    <button
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      {colorMode}
    </button>
  );
};
