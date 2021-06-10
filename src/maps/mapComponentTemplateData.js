export const mapComponentTemplateData = {
  'j-empty': {
    template: {
      moduleSign: 'j-empty',
      materialType: 0,
      type: 0,
      title: '辅助空白',
      moduleJson: {
        type: 1,
        contentProps:{
        },
        styleProps: {
          0:{
            height: 28,
            lineStyle: 1,
            lineColor: '#D8D8D8',
            backgroundColor: "#FFFFFF",
          },
          1: {
            height: 28,
            backgroundColor: "#FFFFFF",
          },
          2: {
            height: 28,
            lineStyle: 1,
            lineColor: '#D8D8D8',
            backgroundColor: "#FFFFFF",
          }
        }
      }
    },
    typeArr: [
      {value: 1, text: "纯空白"},
      {value: 2, text: "分割线"},
    ]
  },
  'j-title': {
    template: {
      moduleSign: 'j-title',
      materialType: 0,
      type: 0,
      title: '标题',
      moduleJson: {
        type: 1,
        contentProps:{
          text: '标题',
          link: '',
        },
        styleProps: {
          0:{
            height: 28,
            fontSize: 1,
            fontWeight: 0,
            textAlign: 1,
            color: '#000000',
            iconColor: '#000000',
            backgroundColor: "#FFFFFF",
          },
          1: {
            height: 28,
            fontSize: 1,
            fontWeight: 0,
            textAlign: 1,
            color: '#000000',
            iconColor: '#000000',
            backgroundColor: "#FFFFFF",
          },
          2: {
            height: 28,
            fontSize: 1,
            fontWeight: 0,
            textAlign: 1,
            color: '#000000',
            iconColor: '#000000',
            backgroundColor: "#FFFFFF",
          }
        }
      }
    },
    typeArr: [
      {value: 1, text: "纯文字"},
      {value: 2, text: "带入口"},
    ]
  },
  'j-notice': {
    template: {
      moduleSign: 'j-notice',
      materialType: 0,
      type: 1,
      title: '店铺公告',
      moduleJson: {
        type: 1,
        contentProps:{
          items: [
            { content: '' }
          ]
        },
        styleProps: {
          0:{
            height: 40,
            scroll: 1,
            color: '#ff0000',
            backgroundColor: "#eeeeee",
          },
          1: {
            height: 40,
            scroll: 1,
            color: '#ff0000',
            backgroundColor: "#eeeeee",
          },
        }
      }
    },
  },
  'j-goods': {
    template: {
      moduleSign: 'j-goods',
      materialType: 0,
      type: 1,
      title: '商品',
      moduleJson: {
        type: 1,
        contentProps:{
          showCart: 1,
          showSalePrice: 1,
          showGoodsSaleNum: 1,
        },
        styleProps: {
          0:{
            listType: 1,
            cardType: 1,
            borderRadius: 1,
            goodsGutter: 5,
            paddingLR: 0,
            backgroundColor: '#ffffff'
          },
          1: {
            listType: 1,
            cardType: 1,
            borderRadius: 1,
            goodsGutter: 5,
            paddingLR: 0,
            backgroundColor: '#ffffff'
          },
        }
      }
    },
  },
}