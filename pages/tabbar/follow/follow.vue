<template>
	<view class="follow">
		<view class="follow_tab">
			<view class="follow_box">
				<view class="follow_tab_item" :class="{active : !activeIndex}" @click="clickTab(0)">关注</view>
				<view class="follow_tab_item" :class="{active : activeIndex == 1}" @click="clickTab(1)">作者</view>
			</view>
		</view>
		<view class="follow_list">
			<swiper class="follow_list_swiper" :current="activeIndex" @change="change">
				<swiper-item>
					<list-scroll>
						<uni-load-more v-if="!followList.length && !nodataShow" status="loading"></uni-load-more>
						<list-card  v-for="(item,index) in followList" :key="index" :type="'follow'" :item="item"></list-card>
						<view v-if="nodataShow" class="nodataShow">暂无数据</view>
					</list-scroll>
				</swiper-item>
				<swiper-item>
					<!-- <view class="swipe_item">作者</view> -->
					<list-scroll>
						<list-author v-for="item in authorList" :key="item._id" :item="item"></list-author>
					</list-scroll>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				followList: [],
				authorList: [],
				nodataShow: false
			}
		},
		onLoad() {
			uni.$on('update_article',()=> {
				console.log('updateLikeArticle');
				this.getFollow()
			})
			uni.$on('update_author',()=> {
				console.log('update_author');
				this.getAuthor()
			})
			this.getFollow()
			this.getAuthor()
		},
		methods: {
			clickTab(index){
				this.activeIndex = index
			},
			getFollow(){
				this.$api.get_follow().then(res => {
					this.$set(this,"followList",res.data)
					this.nodataShow = this.followList.length ? false : true
				})
			},
			change(e){
				this.activeIndex = e.detail.current
			},
			getAuthor(){
				this.$api.get_author().then(res => {
					// console.log(res,'author');
					this.authorList = res.data
				})
			}
		}
	}
</script>

<style lang="scss">
    page{
		height: 100%;
		display: flex;
	}
	.follow{
		height: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		flex: 1;
		.follow_tab{
			height: 30px;
			padding: 10px 20px;
			.follow_box{
				display: flex;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				border: 1px solid $mk-base-color;
				.follow_tab_item{
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 14px;
					width: 100%;
					&:first-child{
						border-right: 1px solid $mk-base-color;
					}
					&.active{
						color: red;
					}
				}
			}
		}
		.follow_list{
			flex: 1;
			.follow_list_swiper{
				height: 100%;
				.swipe_item{
					height: 100%;
				}
			}
		}
	}
	.nodataShow{
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
