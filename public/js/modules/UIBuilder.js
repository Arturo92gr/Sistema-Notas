import { PanelMapper } from "../mapper/PanelMapper.js";

export class UIBuilder {
    static build(data) {
        console.log(data.panels);
        const contenedor = document.getElementById("main_container");
        data.panels.forEach(element => {
            const div = PanelMapper(element);
            contenedor.appendChild(div);
        });
    }
}