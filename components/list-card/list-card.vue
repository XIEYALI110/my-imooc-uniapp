<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view class="listCard" v-if="item.mode == 'base'">
			<view class="listImg">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="cardCon">
				<view class="listcard-title">
					<text>{{item.title}}</text>
					<collect-icon :item="item" :type="type"></collect-icon>
				</view>
				<view class="listcard-detail">
					<view class="des-label">
						<view class="label-item">{{item.classify}}</view>
					</view>
					<view class="des-brose">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="listCard mode-column" v-if="item.mode == 'image'">
			<view class="cardCon">
				<view class="listcard-title">
					<text>{{item.title}}</text>
					<collect-icon :item="item" :type="type"></collect-icon>
				</view>
				<view class="listImg">
					<view v-if="indx<3" v-for="(itm,indx) in item.cover" :key="indx" class="listCard-image-item">
						<image :src="itm"  mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-detail">
					<view class="des-label">
						<view class="label-item">{{item.classify}}</view>
					</view>
					<view class="des-brose">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="listCard mode-image" v-if="item.mode == 'column'">
			<view class="listImg">
					<image :src="item.cover[0]"></image>
			</view>
			<view class="cardCon">
				<view class="listcard-title">
					<text>{{item.title}}</text>
					<collect-icon :item="item" :type="type"></collect-icon>
				</view>
				<view class="listcard-detail">
					<view class="des-label">
						<view class="label-item">{{item.classify}}</view>
					</view>
					<view class="des-brose">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default(){
					return {}
				}
			},
			type: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			open(){
				this.$emit('clickDes')
				const params = {
					_id : this.item._id,
					title : this.item.title,
					author: this.item.author,
					create_time: this.item.create_time,
					thumbs_up_count: this.item.thumbs_up_count,
					browse_count: this.item.browse_count
				}
				uni.navigateTo({
					url:"/pages/home-detail/home-detail?params=" + JSON.stringify(params)
				})
			}
		}
	}
</script>

<style lang="scss">
	.listCard{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		.listImg{
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		};
		.cardCon{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;
			.listcard-title{
				font-size: 14px;
				color: #333;
				line-height: 1.2;
				position: relative;
				margin-right: 30px;
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient:vertical;
				}
			};
			.listcard-detail{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.des-label{
					display: flex;
					.label-item{
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 5px;
						border: 1px solid $mk-base-color  ;
						color: $mk-base-color;
					}
				};
				.des-brose{
					
				}
			}
		}
		&.mode-column{
			.cardCon{
				width: 100%;
				padding-left: 0;
			};
			.listImg{
				display: flex;
				margin-top: 0;
				width: 100%;
				height: 70px;
				.listCard-image-item{
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child{
						margin-left: 0;
					}
					image{
						width: 100%;
						height: 100%;
					}
				};
			};
			.listcard-detail{
				margin-top: 10px;
			}
		}
		&.mode-image{
			flex-direction: column;
			.listImg{
				width: 100%;
				height: 100px;
				margin-left: 0;
			}
			.cardCon{
				padding-left: 0;
				margin-top: 10px;
				.listcard-detail{
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}

</style>
