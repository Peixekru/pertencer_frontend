export function useSystemColors(index) {

    const systemThemes =
        [
            "light",
            "dark",
            "customLightTheme",
            "customDarkTheme"
        ];

    return systemThemes[index];

}