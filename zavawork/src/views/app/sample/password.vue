<template>
	<div class="auth-layout-wrap">
		<div class="auth-content">
			<div class="card o-hidden">
				<div class="row">
					<div class="col-md-6 text-center ">
						<div class="pl-3 auth-right">
							<div class="auth-logo text-center mt-4">
								<img src="@/assets/images/symbol.png" alt="" />
							</div>
						</div>
					</div>
					
					<b-col md="6">
						<div class="p-4">
							<h1 class="mb-3 text-18 custom-separator mt-0 mb-3 pb-3">비밀번호 변경</h1>
							<b-form @submit.prevent="submit">
								<b-form-group label="현재 비밀번호" class="custom-separator mb-3 pb-3">
									<b-form-input
											class="form-control form-control-rounded"
											label="Name"
											type="oldPassword"
											v-model.trim="$v.oldPassword.$model"
									>
									</b-form-input>
									<b-alert
											show
											variant="danger"
											class="error col mt-1"
											v-if="!$v.oldPassword.minLength"
									>Minimum
										{{ $v.oldPassword.$params.minLength.min }} charaters.</b-alert
									>
								</b-form-group>
								
								<b-form-group label="새 비밀번호">
									<b-form-input
											class="form-control form-control-rounded"
											label="Name"
											type="newPassword"
											v-model.trim="$v.newPassword.$model"
									>
									</b-form-input>
									<b-alert
											show
											variant="danger"
											class="error col mt-1"
											v-if="!$v.newPassword.minLength"
									>Minimum
										{{ $v.newPassword.$params.minLength.min }} charaters.</b-alert
									>
								</b-form-group>
								<b-form-group label="새 비밀번호 확인">
									<b-form-input
											class="form-control form-control-rounded"
											label="Name"
											type="password"
											v-model.trim="$v.repeatPassword.$model"
									>
									</b-form-input>
									<b-alert
											show
											variant="danger"
											class="error col mt-1"
											v-if="!$v.repeatPassword.sameAsPassword"
									>Passwords must be identical.</b-alert
									>
								</b-form-group>
								<b-button
										type="submit"
										block
										variant="primary"
										:disabled="submitStatus === 'PENDING' || $v.$invalid"
										class="btn-rounded"
								>변경</b-button>
								
								<p v-once class="typo__p" v-if="submitStatus === 'OK'">
									{{ makeToastTwo("success") }}
									{{ this.$router.push("/") }}
								</p>
								<p v-once class="typo__p" v-if="submitStatus === 'ERROR'">
									{{ makeToast("danger") }}
								</p>
								<div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
									<div class="spinner sm spinner-primary mt-3"></div>
								</div>
							</b-form>
						</div>
					</b-col>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { required, sameAs, minLength } from "vuelidate/lib/validators";
	import { mapGetters, mapActions } from "vuex";
	export default {
		metaInfo: {
			// if no subcomponents specify a metaInfo.title, this title will be used
			title: "비밀번호 변경"
		},

		data() {
			return {
				fName: "",
				oldPassword: "",
				newPassword: "",
				repeatPassword: "",
				submitStatus: null
			};
		},

		validations: {
			oldPassword: {
				required,
				minLength: minLength(5)
			},
			newPassword: {
				required,
				minLength: minLength(5)
			},
			repeatPassword: {
				sameAsPassword: sameAs("password")
			}
		},

		computed: {
			...mapGetters(["loggedInUser", "loading", "error"])
		},

		methods: {
			...mapActions(["signUserUp"]),
			//   validate form
			submit() {
				console.log("submit!");

				this.$v.$touch();
				if (this.$v.$invalid) {
					this.submitStatus = "ERROR";
				} else {
					this.signUserUp({ email: this.email, password: this.password });
					this.submitStatus = "PENDING";
					setTimeout(() => {
						this.submitStatus = "OK";
					}, 1000);
				}
			},
			makeToast(variant = null) {
				this.$bvToast.toast("Please fill the form correctly.", {
					title: `Variant ${variant || "default"}`,
					variant: variant,
					solid: true
				});
			},
			makeToastTwo(variant = null) {
				this.$bvToast.toast("Successfully Created Account", {
					title: `Variant ${variant || "default"}`,
					variant: variant,
					solid: true
				});
			},

			inputSubmit() {
				console.log("submitted");
			}
		}
	};
</script>
<style>
	.spinner.sm {
		height: 2em;
		width: 2em;
	}
</style>
