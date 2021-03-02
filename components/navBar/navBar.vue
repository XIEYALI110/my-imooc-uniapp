<template>
	<view class="navBar">
		<view class="nav-fixed">
			<view :style="{height: staticysBarHeight  + 'px'}"></view>
			<view class="nav-content" :style="{height: navBarHeight + 'px', width: windowWidth + 'px'}" @click.stop="clickSearch" :class="isSearch ? 'isSearch' : ''">
				  <view class="nav-search-backIcon" v-if="isSearch">
				  	<uni-icons type="back" size="22" color="#999" @click="back"></uni-icons>
				  </view>
				  <view class="nav-search" v-if="!isSearch">
					 <view class="icon">
						<!-- <text class="iconfont icon-search"></text> -->
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					 </view>
					<view class="text">uni-app vue react</view>
				</view>
				<view class="nav-search" v-else>
					<input type="text" placeholder="请输入" class="text" v-model="val" @input="inputChange"/>
				</view>
			</view>
		</view>
		<view :style="{height: navBarHeight+staticysBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: [String, Number],
				default: ''
			},
			isSearch: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				staticysBarHeight: 0,
				navBarHeight: 44,
				windowWidth: 370,
				val: ''
			}
		},
		watch: {
			value(newVal){
				this.val = newVal
			}
		},
		created() {
			// 状态栏高度
			const info = uni.getSystemInfoSync()
			this.staticysBarHeight = info.statusBarHeight 
			this.windowWidth = info.windowWidth
			// 微信小程序获取胶囊位置 
			// #ifndef H5 || APP-NVUE || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			let navBarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
		},
		methods: {
			clickSearch(){
				console.log('serac',this.isSearch)
				if(this.isSearch) return
				uni.navigateTo({
					url: '/pages/home-search/home-search'
				})
			},
			inputChange(e){
				this.$emit('input', e.target.value)
			},
			back(){
				console.log('back');
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icon.css';
    .navBar{
		.nav-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			background-color: $mk-base-color;
			.nav-content{
				padding:0 15px;
				height: 44px;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				.nav-search{
					width: 100%;
					display: flex;
					box-sizing: border-box;
					align-items: center;
					padding: 0 10px;
					height: 30px;
					padding: 10px;
					background-color: #fff;
					border-radius: 30px;
					.icon{
						// border: 1px red solid ;
						margin-right: 10px;
					}
					.text{
						font-size: 12px;
					}
				}
			}
			&.isSearch{
				padding-left: 0;
				.nav-search-backIcon{
					margin-left: 10px;
					margin-right: 10px;
				}
			}
		}
		
	}
	.icon-search:before {
	  content: "\e62a";
	}
</style>
