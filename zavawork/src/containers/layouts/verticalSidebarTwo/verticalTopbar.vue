<template>
	<div class="mb-30 m-4">
		<header class="main-header vertical-header bg-white d-flex justify-content-between rounded-0">
			<div class="d-flex">
				<div class="ml-4 mt-1 vertical-header-logo">
					<a href=""><img src="http://www.caedu.co.kr/images/common/logo.png" alt=""></a>
				</div>
			</div>
			<div style="margin: auto"></div>
			<div class="header-part-right">
				<div class="i-bell-btn mr-1" v-b-modal.modal-center>
					<span class="badge badge-primary">3</span>
					예약건수<i class="i-Bell text-muted header-icon"></i>
				</div>
				<!--예약 건수 레이어-->
				<b-modal id="modal-center" centered title="BootstrapVue">
					<p class="my-4">Vertically centered modal!</p>
				</b-modal>
				<!--//예약 건수 레이어-->
				<i class="i-Full-Screen header-icon d-none d-sm-inline-block mr-3" @click="handleFullScreen"></i><!-- Full screen toggle -->
			</div>
			<div class="mr-3">
				<b-dropdown variant="secondary" id="dropdown-1" text="송찬호(zavawork00)님"><!--primary-->
					<b-dropdown-item>비밀번호변경</b-dropdown-item>
					<b-dropdown-item>로그아웃</b-dropdown-item>
				</b-dropdown>
			</div>
			
		</header>
	</div>
</template>
<script>
	import Util from "@/utils";
	export default {
		computed: {
		},
		data() {
			return {
			};
		},
		methods: {
			handleFullScreen() {
				Util.toggleFullScreen();
			},
			// confirm-message-box
			showMsgBoxOne() {
				this.boxOne = "";
				this.$bvModal
					.msgBoxConfirm("Are you sure?")
					.then(value => {
						this.boxOne = value;
					})
					.catch(err => {
						// An error occurred
					});
			},
			// confirm-message-box
			showMsgBoxTwo() {
				this.boxTwo = "";
				this.$bvModal
					.msgBoxConfirm("Please confirm that you want to delete everything.", {
						title: "Please Confirm",
						size: "sm",
						buttonSize: "sm",
						okVariant: "danger",
						okTitle: "YES",
						cancelTitle: "NO",
						footerClass: "p-2",
						hideHeaderClose: false,
						centered: true
					})
					.then(value => {
						this.boxTwo = value;
					})
					.catch(err => {
						// An error occurred
					});
			}
		},
	};
</script>
<style>
	.vertical-header-logo a img{width:170px}
	.i-bell-btn{position:relative;cursor:pointer}
	.i-bell-btn .badge-primary{position:absolute;right:5px;top:0;}
	.i-bell-btn:hover{background:none;color:#a855f7;}
	.i-bell-btn:hover .i-Bell:hover{background:none}
</style>