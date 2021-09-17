<template>
	<!-- ============ Body content start ============= -->
	<div class="main-content">
		<!--타이틀-->
		<breadcumb :page="'강좌관리'" :folder="'통합게시판관리'" />
		
		<!--form-->
		<div class="card mb-30 admin-form">
			<div class="card-body">
				<b-form>
					<b-row>
						<b-form-group label="일자">
							<b-form-input></b-form-input>
							<b-form-input></b-form-input>
							
							<label class="checkbox checkbox-dark">
								<input type="checkbox" />
								<span>전체기간</span>
								<span class="checkmark"></span>
							</label>
						</b-form-group>
						
						<b-form-group label=".">
							<b-form-select
									class
									v-model="selected1"
									:options=" [
									  { value: 'x', text: '월지정' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
							<b-form-select
									class
									v-model="selected1"
									:options=" [
									  { value: 'x', text: '년지정' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
							<b-form-select
									class
									v-model="selected1"
									:options=" [
									  { value: 'x', text: '+ 학습지원센터 > 고객센터 > 자주하는 질문 FAQ' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
						</b-form-group>
						<b-col class="btn-box">
							<b-button type="submit" size="sm" variant="dark">검색시작</b-button>
							<b-button type="submit" size="sm" variant="info">다운로드</b-button>
						</b-col>
					</b-row>
					<b-row>
						<b-form-group label="검색어 (제목, 내용, 답변 동시검색)" class="bold">
							<b-form-input></b-form-input>
						</b-form-group>
						<b-form-group label="등록자">
							<b-form-input></b-form-input>
						</b-form-group>
						<b-form-group label="실회원명">
							<b-form-input></b-form-input>
						</b-form-group>
						<b-form-group label="아이디">
							<b-form-input></b-form-input>
						</b-form-group>
						<b-form-group label="담당자">
							<b-form-input></b-form-input>
						</b-form-group>
					</b-row>
					<b-row>
						<b-form-group label="강의실 학습관련 게시판 검색조건" class="bold">
							<b-form-select
									class
									v-model="selected1"
									:options=" [
									  { value: 'x', text: '학기검색' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
							<b-form-select
									class
									v-model="selected1"
									:options=" [
									  { value: 'x', text: '과목검색' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
							<b-form-select
									class
									v-model="selected1"
									:options=" [
									  { value: 'x', text: '구분검색' }
									]"
									id="inline-form-custom-select-pref1">
							</b-form-select>
						</b-form-group>
					</b-row>
				</b-form>
				<div class="text-danger mt-1">※ 상세조회시 아래의 리스트에서 성명을 더블클릭하시기 바랍니다!</div><!--section-info-->
			</div>
		</div>
		<!--form-->
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
				tabs: [],
				tabCounter: 0,

				selected1:"x",
				options1:[
					{ value: 'x', text: ' select an option' },
					{ value: 'a', text: 'January' },
					{ value: 'b', text: 'February' },],
				date: '',
				form: {
					name: "",
					email: "",
					fName: "",
					lName: "",
					phone: ""
				},
				selected: "first",
				options: [
					{ text: "First radio", value: "first" },
					{ text: "Second radio", value: "second" },
					{ text: "Third radio", value: "third" }
				],
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
			closeTab(x) {
				for (let i = 0; i < this.tabs.length; i++) {
					if (this.tabs[i] === x) {
						this.tabs.splice(i, 1)
					}
				}
			},
			newTab() {
				this.tabs.push(this.tabCounter++)
			}
		}
	}
</script>