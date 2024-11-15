export const PanelMapper = (panel) => {
    const div = document.createElement("div");
    for (const key in panel) {
        switch(key) {
            case 'panelName': 
                div.setAttribute("id",panel[key]);
                break;
        }
    }
    return div;
};
