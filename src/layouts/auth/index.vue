<template>
    <div id="authLayout" class="auth-layout-wrapper">
        <div class="container">
            <div class="top">
                <div class="header">
                    <a href="/">
                        <img src="@/assets/images/logo-ant.svg" class="logo" alt="logo">
                        <span class="title">Admin Pro</span>
                    </a>
                </div>
                <div class="desc">Ant Design</div>
            </div>
            <div class="main">
                <router-view/>
            </div>
            <div class="footer">
                <div class="links">
                    <a href="_self">Quy định</a>
                    <a href="_self">Trợ giúp</a>
                    <a href="_self">Hỏi đáp</a>
                </div>
                <div class="copyright">Copyright © 2020 Son Hoang</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style lang="less" scoped>

#authLayout.auth-layout-wrapper {
    height: 100%;
    .container {
        position: relative;
        width: 100%;
        min-height: 100%;
        padding: 110px 0 144px;
        background-image: url(~@/assets/images/background-auth.svg);
        background-repeat: no-repeat;
        background-position: center 110px;
        background-size: 100%;

        .top {
            text-align: center;
            .header {
                height: 44px;
                line-height: 44px;
                .logo {
                    height: 44px;
                    margin-right: 16px;
                    vertical-align: top;
                    border-style: none;
                }
                .title {
                    position: relative;
                    top: 2px;
                    color: rgba(0,0,0,.85);
                    font-weight: 600;
                    font-size: 33px;
                    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
                }
            }
            .desc {
                margin-top: 12px;
                margin-bottom: 40px;
                color: rgba(0,0,0,.45);
                font-size: 14px;
            }
        }

        .main {
            width: 368px;
            min-width: 260px;
            margin: 0 auto;
        }

        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            margin: 48px 0 24px;
            padding: 0 16px;
            text-align: center;
            .links {
                margin-bottom: 8px;
                font-size: 14px;
                a {
                    color: rgba(0,0,0,.45);
                    transition: all .3s;
                    &:not(:last-child) {
                        margin-right: 40px;
                    }
                }
            }
        }
    }
}

</style>
