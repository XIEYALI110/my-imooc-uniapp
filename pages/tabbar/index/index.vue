<template>
	<view class="home">
		<navBar></navBar>
		<tab :list="labelDate" @tab="tab" :currentIndex="currentIndex"></tab>
		<!-- <view class="scrollCon">
			<scroll-view scroll-y class="scroll-item">
				<view>
					<view v-for="item in 100">{{item}}</view>
				</view>
			</scroll-view>
		</view> -->
		<!-- <list-scroll>
			<list-card  :mode="'base'"></list-card>
			<list-card  :mode="'image'"></list-card>
			<list-card  :mode="'column'"></list-card>
			<list-card  :mode="'column'"></list-card>
			<list-card  :mode="'column'"></list-card>
			<list-card  :mode="'column'"></list-card>
		</list-scroll> -->
		<view class="home-list">
			<list :tab="labelDate" :activeIndex="activeIndex" @change="change"></list>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	// easyCom
	// import navBar from "@/components/navBar/navBar"
	export default {
		// components: {
		// 	navBar
		// },
		data() {
			return {
				title: 'Hello',
				labelDate: [],
				currentIndex: 0,
				activeIndex: 0
			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		watch:{
			userinfo(val){
				this.getLabel()
			}
		},
		onLoad() {
			uni.$on('labelChange', ()=>{
				console.log('接收标签调整');
				this.getLabel()
			})
			this.getLabel()
		},
		methods: {
			getLabel(){
				const _this =this
				// console.log(this.$api)
				// uniCloud.callFunction({
				// 	name: "get_label",
				// 	success(res) {
				// 		console.log(res,'label')
				// 		_this.$set(_this,"labelDate", res.result.data)
				// 	},
				// 	err(err){
				// 		console.log(err)
				// 	}
				// })
				// 调用云函数
				// uniCloud.callFunction({
				// 	name:"get_label",
				// }).then((res) =>{
				// 	const {result} = res;
				// 	_this.$set(_this,"labelDate", res.result.data)
				// 	console.log(_this.labelDate)
				// })
				// 调用封装api
				this.$api.get_label({
					name: "get_label"
				}).then((res)=>{
					console.log('tab',res);
					res.data.unshift({name: "全部"})
					_this.$set(_this,"labelDate",res.data)
				})
			},
			tab(data){
				this.activeIndex = data.index
			},
			change(data){
				this.currentIndex = data
				this.activeIndex = data
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}	
	}
</style>
