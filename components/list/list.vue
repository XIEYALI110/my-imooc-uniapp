<template>
	<view class="home">
		<swiper class="home-swipe" @change="change" :current="activeIndex">
			<swiper-item class="swipe-item" v-for="(item,index) in tab" :key="index" >
				<list-item :list="listCatch[index]" :pageSize="pageSize" :load="load[index]" @loadMore="loadMore"></list-item>
			</swiper-item>
			<!-- <swiper-item>
				<view class="swiper-item"></view>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
	import listItem from './list-item'
	export default {
		components: {
			listItem
		},
		props:{
			tab: {
				type: Array,
				default(){
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				listCatch: {},
				page: 1,
				pageSize: 10,
				load: {
					
				}
			};
		},
		created(){
			// const _this = this
			uni.$on('update_article',e =>{
				if(e == 'follow'){
					this.listCatch = {}
					this.load = {}
					this.getList(this.activeIndex)
				}
			})
		},
		watch: {
			tab: {
				handler(newVal){
					if(newVal.length == 0) return
					this.listCatch = {}
					this.load = {}
					this.getList(this.activeIndex)
				}
			},
			// page: {
			// 	handler(val,old){
			// 		console.log(val,old)
			// 		if(val != old){
			// 			this.getList(this.activeIndex)
			// 		}
			// 	}
			// }
		},
		methods: {
			loadMore(){
				console.log(this.load,this.activeIndex)
				// if(this.load[this.activeIndex].load = 'noMore'){
				// 	return
				// }
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
			change(e){
				const {current} = e.detail
				this.$emit('change', current)
				if(!this.listCatch[current] || !this.listCatch[current].length){
					this.getList(current)
				}
			},
			getList(num){
				// console.log('list',this.tab[num].name);
				if(!this.load[num]){
					this.load[num] = {
						page: 1,
						load: 'loading'
					}
				}
				console.log('当前的页数',this.load[num].page);
				const _this = this
				this.$api.get_list({
					   name:this.tab[num].name,
					   page: this.load[num].page,
					   pageSize: this.pageSize
					}).then((res)=>{
					const {data} = res
					if(!data.length){
						let oldLoad = {}
						oldLoad.load = "noMore",
						oldLoad.page = _this.load[num].page
						_this.$set(_this.load,num,oldLoad)
						_this.$forceUpdate()
						return
					}
					let oldList = _this.listCatch[num] || []
					oldList.push(...data)
					// console.log(_this.listCatch,num,oldList);
					console.log(_this.load,'load');
					_this.$set(_this.listCatch,num,oldList)
				})
			}	
			
		}
	}
</script>

<style lang="scss">
	.home{
		height: 100%;
	}	
	.home-swipe{
		height: 100%;
		.swipe-item{
			height: 100%;
			.list-scroll{
				height: 100%;
			}
		}
	}
</style>
