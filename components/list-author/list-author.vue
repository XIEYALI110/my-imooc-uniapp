<template>
	<view class="list_author">
		<view class="list_author_image">
			<image :src="item.avatar" mode="aspectFill"></image>
		</view>
		<view class="list_author_content">
			<view class="list_author_content_title">{{item.author_name}}</view>
			<view class="list_author_content_des">
				<view class="list_author_content_des_1">{{item.professional}}</view>
				<view class="list_author_content_des_2">
					<text class="text">发帖  {{item.article_ids.length}}</text>
					<text class="text">粉丝  {{item.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
			};
		},
		created(){
			// this.getAuthor()
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.list_author{
		display: flex;
		padding: 10px 0;
		margin: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
		// box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		/* overflow: hidden; */
		.list_author_image{
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.list_author_content{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;
			.list_author_content_title{
				font-size: 14px;
				color: #333;
				font-weight: bold;
			}
			.list_author_content_des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.list_author_content_des_1{
					color: #666;
				}
				.list_author_content_des_2{
					color: #999;
					text:last-child{
						padding-left: 10px;
					}
				}
			}
		}
	}
</style>
