<template>
	<!-- ============ Body content start ============= -->
	<div class="main-content">
		
		<breadcumb :page="'회원조회'" :folder="'회원관리'" />
		<div><!-- class="row"-->
			<!-- begin::dynamic-tabs -->
			<div>
				<b-card
						class="card   mb-30"
						header="Dynamic"
						header-bg-variant="transparent ">
					<b-tabs >
						<!-- Render Tabs, supply a unique `key` to each tab -->
						<b-tab v-for="i in tabs" :key="`dyn-tab-${i}`" :title="`Tab ${i}`">
							Tab Contents {{ i }}
							<b-button size="sm" variant="danger" class="float-right" @click="() => closeTab(i)">
								Close tab
							</b-button>
						</b-tab>
						
						<!-- New Tab Button (Using tabs slot) -->
						<template slot="tabs">
							<b-nav-item @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
						</template>
						
						<!-- Render this if no tabs -->
						<div slot="empty" class="text-center text-muted">
							There are no open tabs<br>
							Open a new tab using the <b>+</b> button above.
						</div>
					</b-tabs>
				</b-card>
			</div>
		</div>
	</div>
	<!-- ============ Body content End ============= -->
</template>
<script>
	export default {
		metaInfo: {
			// if no subcomponents specify a metaInfo.title, this title will be used
			title: "Basic Action Bar"
		},
		data() {
			return {
				form: {
					email: "",
					name: "",
					food: null,
					checked: []
				},

				show: true
			};
		},
		methods: {
			onSubmit(el) {
				let x = el.preventDefault();
				this.$swal({
					position: "top-end",
					type: "success",
					title: "Your File Has Been Submitted",
					showConfirmButton: false,
					timer: 1500
				});
			},
			onReset(evt) {
				evt.preventDefault();
				// Reset our form values
				this.form.email = "";
				this.form.name = "";
				this.form.food = null;
				this.form.checked = [];
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			}
		}
	};
</script>
<style>

</style>