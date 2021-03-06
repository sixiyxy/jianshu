import styled from 'styled-components'
import logoPic from '../../statics/logo.png';
// import { createGlobalStyle } from 'styled-components';

// export const Iconstyle = createGlobalStyle`
// 	@font-face {
// 		font-family: "iconfont";
// 		src: url('./iconfont.eot?t=1528610804703'); /* IE9*/
// 		src: url('./iconfont.eot?t=1528610804703#iefix') format('embedded-opentype'), /* IE6-IE8 */
// 		url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
// 		url('./iconfont.ttf?t=1528610804703') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
// 		url('./iconfont.svg?t=1528610804703#iconfont') format('svg'); /* iOS 4.1- */
// 	}

// 	.iconfont {
// 		font-family:"iconfont" !important;
// 		font-size:16px;
// 		font-style:normal;
// 		-webkit-font-smoothing: antialiased;
// 		-moz-osx-font-smoothing: grayscale;
// 	}
// `

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .3s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;


export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '??????'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`
