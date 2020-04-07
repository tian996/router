import React from "react";
import { withRouter } from "react-router-dom";
import style from './style.scss';

export default withRouter(function(props){
    return(
        <div className={style.header}>
            我是头部
        </div>
    )
})