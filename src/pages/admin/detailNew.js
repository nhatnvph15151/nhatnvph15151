import data from "../../data";
const DetailNew = {
    render(id){
        const result = data.finl((post) = post.id== id);
        return  `
        <h1>${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
        `;
    },
}
export default DetailNew;
