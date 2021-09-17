<template>
	<!-- ============ Body content start ============= -->
	<div class="main-content">
		<!--타이틀-->
		<breadcumb :page="'이벤트'" :folder="'얼리버드'" />
		
		<!--form-->
		<div class="card mb-30 admin-form">
			<div class="card-body text-13">
				<b-form>
					<b-row>
						<b-form-group label=".">
							<b-form-select
									class
									v-model="selected"
									:options=" [
									  { value: 'x', text: '2009년 1-2차' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
						</b-form-group>
						<b-form-group label="성명">
							<b-form-input></b-form-input>
						</b-form-group>
						<b-form-group label="핸드폰번호 ">
							<b-form-input></b-form-input>
						</b-form-group>
						<b-form-group label="담당자">
							<b-form-select
									class
									v-model="selected"
									:options=" [
										  { value: 'x', text: '담당자' }
										]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
							
							<label class="checkbox checkbox-dark">
								<input type="checkbox" />
								<span>포함</span>
								<span class="checkmark"></span>
							</label>
						</b-form-group>
						<b-col class="btn-box">
							<b-button type="submit" size="sm" variant="dark">검색시작</b-button>
							<b-button type="submit" size="sm" variant="dark">다운로드</b-button>
						</b-col>
					</b-row>
				</b-form>
				
				<div class="text-danger mt-1 custom-separator pb-3">※ 상세조회시 아래의 리스트에서 성명을 더블클릭하시기 바랍니다 !!!</div>
				<div class="mt-2">
					1. 인바등록 후 수강신청한 경우 <br>
					- 인바등록 후 당일 포함 3일 이내에 결제한 수강생<br>
					- 인바등록 후 당일 포함 7일 이내에 결제한 수강생이며 회원가입 후 부재를 제외한 첫 상담 이후 3일내 결제한 수강생<br>
					2. 무료학습설계 후 수강신청한 경우<br>
					- 무료학습설계후 당일 포함 3일 이내에 결제한 수강생<br>
					- 무료학습설계후 당일 포함 7일 이내에 결제한 수강생이며 회원가입 후 부재를 제외한 첫 상담 이후 3일내 결제한 수강생<br>
					3. 회원가입 후 수강신청한 경우<br>
					- 회원가입 후 당일 포함 3일 이내에 결제한 수강생<br>
					- 회원가입 후 당일 포함 7일 이내에 결제한 수강생이며 회원가입 후 부재를 제외한 첫 상담 이후 3일내 결제한 수강생<br>
					4. 6과목 이상 결제자 기준
				</div>
			</div>
		</div>
		
		<!--order-table-->
		<div class="card mb-30">
			<div class="card-body">
				<vue-good-table
					:columns="columns"
					:line-numbers="false"
					:search-options="{
						enabled: true,
						placeholder: 'Search this table'
					}"
					:pagination-options="{
					  enabled: true,
					  mode: 'records'
					}"
					styleClass="vgt-table tableOne"
					:rows="rows"
				>
				
					<template slot="table-row" slot-scope="props">
						<span v-if="props.column.field == 'button'">
							<a href="">
							  <i class="i-Eraser-2 text-25 text-success mr-2"></i>
							  {{ props.row.button }}</a
							>
							<a href="">
							  <i class="i-Close-Window text-25 text-danger"></i>
							  {{ props.row.button }}</a
							>
						</span>
					</template>
				</vue-good-table>
			</div>
		</div>
	</div>
	<!-- ============ Body content End ============= -->
</template>

<script>
	export default {
		data() {
			return {
				selected:"x",
				columns: [
					{
						label: "Order Id",
						field: "id",
						thClass: "text-left pl-3",
						tdClass: "text-left pl-3"
					},
					{
						label: "Buyer Name",
						field: "name",
						thClass: "text-left",
						tdClass: "text-left"
					},
					{
						label: "Product",
						field: "img",
						html: true,
						thClass: "text-left",
						tdClass: "text-left"
					},
					{
						label: "Status",
						field: "span",
						html: true,
						thClass: "text-left",
						tdClass: "text-left"
					},

					{
						label: "Shipping Cost",
						field: "score",

						// html:true,
						type: "percentage",
						thClass: "text-left",
						tdClass: "text-left"
					},
					{
						label: "Date",
						field: "createdAt",
						type: "date",
						dateInputFormat: "yyyy-mm-dd",
						dateOutputFormat: "mmm Do yy",
						thClass: "text-left",
						tdClass: "text-left"
					},
					{
						label: "Action",
						field: "action",
						html: true,
						thClass: "text-left",
						tdClass: "text-left"
					}
				],
				rows: [
					{
						id: 1,
						name: "John",
						img:
							'<img src="' +
							require("@/assets/images/products/iphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/iphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-primary p-2 ">Delivered</span>',
						createdAt: "2019-10-31 ",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					},
					{
						id: 2,
						name: "Jane",
						img:
							'<img src="' +
							require("@/assets/images/products/headphone-1.jpg") +
							'" class="rounded-circle avatar-sm" alt=""> <img src="' +
							require("@/assets/images/products/headphone-2.jpg") +
							'" class="rounded-circle avatar-sm" alt="">',
						span:
							'<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
						createdAt: "2011-10-31",
						score: 0.03343,
						action:
							'<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
					}
				]
			}
		},
		methods: {
		}
	}
</script>
<style>
	.dyn-tab-box .tab-content{padding:0}
	.dyn-tab-box>.card{border-radius:0;border:0;box-shadow:none;}
	.dyn-tab-box>.card-header{padding:0}
	.dyn-tab-box>.card-header-tabs{margin:0}
	.dyn-tab-box>.card-body {padding:1.25rem 0}
	
	.col{padding:0;padding-left:5px}
	.col button{position:relative;bottom:0;margin-left:5px}
	.col button:first-child{margin-left:0}
	
	.row{border-top:1px solid #e3e3e3;padding-top:10px}
	.row:first-child{padding-top:0;border-top:0}
	.row .form-group{margin-left:10px;}
	/*.row .form-group:first-child{margin-left:0px}*/
	
	.form-control,
	.custom-select{padding:0 25px 0 5px;min-width:105px;width:auto;display:inline-block;margin-left:5px}
	.form-control{width:120px;}
	.form-control:first-child,
	.custom-select:first-child{margin-left:0}
	.form-check{display:inline-block;margin-left:5px;margin-top:10px;}
	.checkbox, .radio{display:inline-block;margin-left:5px;margin-top:6px;line-height:20px;height:20px;padding-left:26px;}
	.col-form-label{/*padding-bottom:2px;*/font-size:12px;letter-spacing:-.5px}
	
	.btn-box{line-height:32px;margin-top:24px;}
	.btn-sm, .btn-group-sm > .btn{padding:0.45rem 0.5rem !important}
	.bold{font-weight:bold}
	/*.form-box legend{display:inline-block;width:auto;}
	.form-box div{display:inline-block}*/
	/*.dyn-tab-box .tab-content{border-radius:0;border:0}*/
</style>