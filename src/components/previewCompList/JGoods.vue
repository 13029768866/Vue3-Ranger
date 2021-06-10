<template>
  <div
      v-if="styleProps.listType === 1"
      class="j__goods--wrapper j__goods--wrapper--1 pdlr bgc"
  >
    <div class="j__goods--item goods--gutter"
         :class="[
             cardType ? 'card--type--' + cardType : '',
             { bdrd: styleProps.borderRadius},
         ]">
      <div
          class="img--wrapper"
      ></div>
      <div class="goods--info">
        <div class="goods--title">这是商品名称</div>
        <div class="goods--price">
          <div class="now__price--wrapper">
            <div class="unit">￥</div>
            <div class="val">8</div>
            <div class="dot-val">.88</div>
          </div>
          <div class="prev__price--wrapper">
            <div class="val"  v-if="moduleJson.contentProps.showSalePrice">￥8888.8</div>
          </div>
          <div class="right--wrapper">
            <div class="sale__num"  v-if="moduleJson.contentProps.showGoodsSaleNum"> 已售888件 </div>
            <div class="cart--wrapper" v-if="moduleJson.contentProps.showCart">
              <ShoppingCartOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
      v-if="styleProps.listType === 2"
      class="j__goods--wrapper j__goods--wrapper--2 pdlr bgc"
  >
    <div
         v-for="item in 2"
         :key="item"
         class="j__goods--item"
         :class="[
             cardType ? 'card--type--' + cardType : '',
             { bdrd: styleProps.borderRadius},
         ]">
      <div
          class="img--wrapper"
      ></div>
      <div class="goods--info">
        <div class="goods--title">这是商品名称</div>
        <div class="sale__num"  v-if="moduleJson.contentProps.showGoodsSaleNum"> 已售888件 </div>
        <div class="goods--price">
          <div class="now__price--wrapper">
            <div class="unit">￥</div>
            <div class="val">8</div>
            <div class="dot-val">.88</div>
          </div>
          <div class="prev__price--wrapper">
            <div class="val"  v-if="moduleJson.contentProps.showSalePrice">￥8888.8</div>
          </div>

          <div class="right--wrapper">
            <div class="cart--wrapper" v-if="moduleJson.contentProps.showCart">
              <ShoppingCartOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
      v-if="styleProps.listType === 3"
      class="j__goods--wrapper j__goods--wrapper--3 pdlr bgc"
  >
    <div
         v-for="item in 2"
         :key="item"
         class="j__goods--item goods--gutter"
         :class="[
             cardType ? 'card--type--' + cardType : '',
             { bdrd: styleProps.borderRadius},
         ]">
      <div class="img--contain">
        <div
            class="img--wrapper"
        ></div>
      </div>
      <div class="goods--info">
        <div class="goods--title">这是商品名称</div>
        <div class="sale__num"  v-if="moduleJson.contentProps.showGoodsSaleNum"> 已售888件 </div>
        <div class="goods--price">
          <div class="now__price--wrapper">
            <div class="unit">￥</div>
            <div class="val">8</div>
            <div class="dot-val">.88</div>
          </div>
          <div class="prev__price--wrapper">
            <div class="val"  v-if="moduleJson.contentProps.showSalePrice">￥8888.8</div>
          </div>

          <div class="right--wrapper">
            <div class="cart--wrapper" v-if="moduleJson.contentProps.showCart">
              <ShoppingCartOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
      v-if="styleProps.listType === 4"
      class="j__goods--wrapper j__goods--wrapper--4 pdlr bgc"
  >
    <div
         v-for="item in 4"
         :key="item"
         class="j__goods--item goods--gutter"
         :class="[
             cardType ? 'card--type--' + cardType : '',
             { bdrd: styleProps.borderRadius},
         ]">
      <div class="img--contain">
        <div
            class="img--wrapper"
        ></div>
      </div>
      <div class="goods--info">
        <div class="goods--title">这是商品名称</div>
<!--        <div class="sale__num"  v-if="moduleJson.contentProps.showGoodsSaleNum"> 已售888件 </div>-->
        <div class="goods--price">
          <div class="now__price--wrapper">
            <div class="unit">￥</div>
            <div class="val">8</div>
            <div class="dot-val">.88</div>
          </div>
          <div class="prev__price--wrapper">
<!--            <div class="val"  v-if="moduleJson.contentProps.showSalePrice">￥8888.8</div>-->
          </div>

          <div class="right--wrapper">
            <div class="cart--wrapper" v-if="moduleJson.contentProps.showCart">
              <ShoppingCartOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue"
import usePropsPick from "@/hooks/usePropsPick";
import useTransform2PropsType from "@/hooks/useTransform2PropsType";
import { goodsCompProps } from '@/maps/componntDefaultStyleProps';
import {
  ShoppingCartOutlined
} from '@ant-design/icons-vue';

const defaultProps = useTransform2PropsType(goodsCompProps)

export default defineComponent({
  name: "JGoods",
  props: {
    moduleJson:{
      type: Object
    },
    ...defaultProps
  },
  components: {
    ShoppingCartOutlined
  },
  setup(props, ctx) {
    const { styleProps } = usePropsPick(props, goodsCompProps)
    // console.log(styleProps);
    const bgc = computed(() => styleProps.value.backgroundColor)
    const cardType = computed(() => styleProps.value.cardType)

    return {
      bgc,
      cardType,
      styleProps
    }
  }
})


</script>
<style lang="scss" scoped>
.j__goods--wrapper{
  width: calc(v-bind(styleProps.width) * 1px);
  &--1{
    .j__goods--item{
      .img--wrapper{
        padding-top: 52.17%;
        width: 100%;
        background-image: url("@/assets/noImg.png") ;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
      }
      .goods--info{
        padding: 5px 10px;
      }
      .goods--title{
        margin-top: 15px;
        margin-bottom: 5px;
      }
      .goods--price{
        color: rgb(239, 16, 51);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .now__price--wrapper{
          display: flex;
          align-items: flex-start;
          .unit{
            font-size: 15px;
          }
          .val{
            font-size: 17px;
          }
          .dot-val{
            align-self: flex-end;
            font-size: 13px;
            padding-bottom: 2px;
          }
        }
        .prev__price--wrapper{
          color: #bbb;
          margin-left: 15px;
          .val{
            padding-bottom: 2px;
            text-decoration: line-through;
          }
        }

        .right--wrapper{
          flex: 1;
          
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .sale__num{
            font-size: 12px;
            color: #9e9e9e;
            transform: scale(0.8);
          }
          .cart--wrapper{
            font-size: 18px;
            text-align: right;
            margin-left: 5px;
          }
        }
      }
    }
  }

  &--2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .j__goods--item{
      width: 48.5%;
      .img--wrapper{
         padding-top: 100%;
         width: 100%;
         background-image: url("@/assets/noImg.png") ;
         background-size: cover;
         background-position: 50%;
         background-repeat: no-repeat;
      }
      .goods--info{
        padding: 5px 10px;
      }
      .goods--title{
        margin-top: 15px;
        margin-bottom: 5px;
      }
      .goods--price{
        color: rgb(239, 16, 51);
        display: flex;
        align-items: flex-end;
        .now__price--wrapper{
          display: flex;
          align-items: flex-start;
          .unit{
            font-size: 15px;
          }
          .val{
            font-size: 17px;
          }
          .dot-val{
            align-self: flex-end;
            font-size: 13px;
            padding-bottom: 2px;
          }
        }
        .prev__price--wrapper{
          color: #bbb;
          margin-left: 5px;
          .val{
            padding-bottom: 2px;
            text-decoration: line-through;
          }
        }
        .right--wrapper{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .cart--wrapper{
            font-size: 18px;
            text-align: right;
            margin-left: 5px;
          }
        }

      }
      .sale__num{
        font-size: 12px;
        color: #9e9e9e;
      }
    }
  }

  &--3{
    .j__goods--item{
      display: flex;
      align-items: center;
      width: 100%;
      .img--contain{
        width: 100px;
        .img--wrapper{
          padding-top: 100%;
          width: 100%;
          background-image: url("@/assets/noImg.png") ;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
        }

      }
      .goods--info{
        flex: 1;
        padding: 5px 10px;
      }
      .goods--title{
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .goods--price{
        color: rgb(239, 16, 51);
        display: flex;
        align-items: flex-end;
        .now__price--wrapper{
          display: flex;
          align-items: flex-start;
          .unit{
            font-size: 15px;
          }
          .val{
            font-size: 17px;
          }
          .dot-val{
            align-self: flex-end;
            font-size: 13px;
            padding-bottom: 2px;
          }
        }
        .prev__price--wrapper{
          color: #bbb;
          margin-left: 5px;
          .val{
            padding-bottom: 2px;
            text-decoration: line-through;
          }
        }
        .right--wrapper{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .cart--wrapper{
            font-size: 18px;
            text-align: right;
            margin-left: 5px;
          }
        }

      }
      .sale__num{
        font-size: 12px;
        color: #9e9e9e;
      }
    }
  }

  &--4{
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    overflow-x: auto;
    .goods--gutter{
      margin-right:  calc(v-bind(styleProps.goodsGutter) * 1px);

    }
    .j__goods--item{
      width: 33.33%;
      flex-shrink: 0;
      .img--contain{
        width: 100%;
        .img--wrapper{
          padding-top: 100%;
          width: 100%;
          background-image: url("@/assets/noImg.png") ;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
        }

      }
      .goods--info{
        flex: 1;
        padding: 5px 10px;
      }
      .goods--title{
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .goods--price{
        color: rgb(239, 16, 51);
        display: flex;
        align-items: flex-end;
        .now__price--wrapper{
          display: flex;
          align-items: flex-start;
          .unit{
            font-size: 15px;
          }
          .val{
            font-size: 17px;
          }
          .dot-val{
            align-self: flex-end;
            font-size: 13px;
            padding-bottom: 2px;
          }
        }
        .prev__price--wrapper{
          color: #bbb;
          margin-left: 5px;
          .val{
            padding-bottom: 2px;
            text-decoration: line-through;
          }
        }
        .right--wrapper{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .cart--wrapper{
            font-size: 18px;
            text-align: right;
            margin-left: 5px;
          }
        }

      }
      .sale__num{
        font-size: 12px;
        color: #9e9e9e;
      }
    }
  }

}

/* 圆角边框 */
.bdrd{
  border-radius: 8px;
  overflow: hidden;
}
/* 左右间距 */
.pdlr{
  padding: 10px calc(v-bind(styleProps.paddingLR) * 1px);
}
/* 商品间距 */
.goods--gutter{
  margin-bottom:  calc(v-bind(styleProps.goodsGutter) * 1px);
}
/* 背景颜色 */
.bgc{
  background-color: v-bind(bgc);
}
/* 卡片样式 */
.card--type{
  &--1{
    background-color: #fff;
  }
  &--2{
    background-color: #fff;
    box-shadow: 0 0 13px 4px rgb(0 0 0 / 5%);
  }
  &--3{
    background-color: #fff;
    border: 1px solid #e0e0e0;
  }
  &--4{
  }
}
</style>