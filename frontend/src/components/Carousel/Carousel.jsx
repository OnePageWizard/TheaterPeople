import React, { Component } from "react";
import Slider from "react-slick";

import "./Carousel.scss"
import "./Carousel-theme.scss"

/* Получение данных с бэка

    import { useStaticQuery, graphql } from "gatsby"

    const strapiMainSlide = useStaticQuery(graphql`
        query MyQuery {
            allStrapiMainSlide {
                nodes {
                    Header
                    Image {
                        url
                    }
                Description
                }
            }
        }
    `)
*/

// for imgs urls => process.env.STRAPI_API_URL ?

export default class LazyLoad extends Component {
    render() {
        const settings = { // https://react-slick.neostack.com/docs/api
            dots: true,
            lazyLoad: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={"http://127.0.0.1:1337/uploads/Qu_Ev_Nmm_GWN_8_K_Ds7p_0y_F8m69_FBS_6mx_Tpi_A_7_9uftkckrca_B_Dhu4g_Ju_FXK_Bz4q_V_Ve_Iw_O_Wjuhqhrik_Ci_THJLD_Jg_2bc253f9ed.jpeg"} />
                    </div>
                    <div>
                        <img src={"http://127.0.0.1:1337/uploads/kd_Tj_G_Qw_R4_C_Lkjx_Wd_A_Rhnl_JTO_Htcl_Jcqw2_H_Hdf_R3_Ed61n1f9_LT_0z_Vg_Xy02_D2_Bj_XE_9d_Syz_Isf_UG_Mskc_U_Gbmf_LI_6_Q_3_D_3_D_bff0c1798d.jpeg"} />
                    </div>
                </Slider>
            </div>
        );
    }
}