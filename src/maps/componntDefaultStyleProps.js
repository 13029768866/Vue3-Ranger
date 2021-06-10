import { mapComponentTemplateData } from "@/maps/mapComponentTemplateData";

/* 组件共用默认属性 */
export const compCommonDefaultProps = {
  // size
  height: 0,
  width: 375,
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  // border type
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  // shadow and opacity
  boxShadow: "0 0 0 #000000",
  opacity: "1",
  // position and x,y
  position: "absolute",
  left: "0",
  top: "0",
  right: "0",
};

/* empty组件属性start */
export const emptyCompProps= {
  ...compCommonDefaultProps,
  ...mapComponentTemplateData["j-empty"]['template']["moduleJson"]['styleProps'][0],
};
/* empty组件属性end  */

/* title组件属性start */
export const titleCompProps= {
  ...compCommonDefaultProps,
  ...mapComponentTemplateData["j-title"]['template']["moduleJson"]['styleProps'][0],
};
/* title组件属性end  */

/* notice组件属性start */
export const noticeCompProps= {
  ...compCommonDefaultProps,
  ...mapComponentTemplateData["j-notice"]['template']["moduleJson"]['styleProps'][0],
};
/* notice组件属性end  */

/* goods组件属性start */
export const goodsCompProps= {
  ...compCommonDefaultProps,
  ...mapComponentTemplateData["j-goods"]['template']["moduleJson"]['styleProps'][0],
};
/* goods组件属性end  */