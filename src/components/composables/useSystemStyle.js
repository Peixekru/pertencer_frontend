export function useContrastSelect(index, isMono) {

    const contrast =
        [
            "light",
            "dark",
        ];
    
    const contrastMono =
        [
            "lightMono",
            "darkMono",
        ];

        if (isMono){
            return contrast[index];
        } else {
            return contrastMono[index];
        }

}

export function useColorSelect(index, isDark) {

    const colorDark =
        [
            "dark",
            "darkMono"
        ];
    
    const colorLight =
        [
            "light",
            "lightMono"
        ];

    if (isDark){
        return colorDark[index];
    } else {
        return colorLight[index];
    }

}