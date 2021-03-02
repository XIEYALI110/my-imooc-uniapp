<template>
	<view class="tab">
		<scroll-view  class="tab-scroll-box" scroll-x>
			<view v-for="(item,idx) in list" :key="idx" class="tab-scroll-item" :class="{active: activeIdx ==idx}" @click="clickTab(item,idx)">
				{{item.name}}
			</view>
		</scroll-view>
		<view class="iconSet">
			<uni-icons type="gear" size="26" color="#666" @click="set"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default(){
					return []
				}
			},
			currentIndex: {
				type: Number,
				default: 0
			}
		},
		watch:{
			"currentIndex": {
				handler(a,b){
					this.activeIdx = a
				}
			},
			"list"(val){
				console.log(val,'val');
				
			}
		},
		data() {
			return {
				activeIdx: 0
			};
		},
		methods: {
			clickTab(item,i){
				this.activeIdx = i
				this.$emit('tab', {
					data: item,
					index: i
				})
			},
			set(){
				uni.navigateTo({
					url:'/pages/home-label/home-label'
				})
			}
		}
	}
</script>

<style lang="scss">
   /deep/  .uni-scroll-view-content{
		display: flex;
	}
	.active{
		color: red
	}
	.tab{
		display: flex;
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
		width: 100%;
		box-sizing: border-box;
		.tab-scroll-box{
			display: flex;
			flex: 1;
			// width: calc(100% - 40px);
			align-items: center;
			height: 45px;
			flex-wrap: nowrap;
			.tab-scroll-item{
				flex-shrink: 0;
				// height: 45px;
				line-height: 45px;
				padding: 0 10px;
				color: #333;
				font-size: 14px;
				display: inline-block;
			}
			.active{
				color: red
			}
		}
		.iconSet{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			position: relative;
			&::before{
				content: '';
				position: absolute;
				width: 1px;
				height: 22px;
				left: 0;
				top: 12px;
				background-color: #ddd;
			}
		}
	}
</style>
