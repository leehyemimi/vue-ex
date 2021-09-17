<template>
	<!-- ============ Body content start ============= -->
	<div class="main-content">
		
		<div class="dyn-tab-box"><!-- class="row"-->
			<!-- begin::dynamic-tabs -->
			<b-card no-body class="admin-form">
				<b-tabs card>
					<!-- Render Tabs, supply a unique `key` to each tab -->
					<b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
						
						<!--닫기버튼-->
						<button @click="closeTab(i)" class="search-close btn btn-icon bg-transparent float-right pr-0 pt-2">
							<i class="i-Close-Window text-22 text-muted"></i>
						</button>
						<!--타이틀-->
						<breadcumb :page="'회원조회'" :folder="'회원관리'" />
						<!--form-->
						<b-card class="mb-30">
							<b-col><!-- md="12"-->
								<b-form>
									<!--<b-row>
										<b-form-group label="가입일자">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
											<div class="form-check">
												<input
														class="form-check-input"
														type="checkbox"
														id="gridCheck1"
												/>
												<label class="form-check-label" for="gridCheck1">
													전체
												</label>
											</div>
										</b-form-group>
										
										<b-form-group label="/">
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
										</b-form-group>
									</b-row>-->
									
									<b-row>
										<b-form-group label="가입일자">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
											<!--<div class="form-check">
												<input
														class="form-check-input"
														type="checkbox"
														id="gridCheck1"
												/>
												<label class="form-check-label" for="gridCheck1">
													전체
												</label>
											</div>-->
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>전체</span>
												<span class="checkmark"></span>
											</label>
										</b-form-group>
										
										<b-form-group label=".">
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: '소속그룹검색' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 관심분야' }
													]"
													id="inline-form-custom-select-pref2">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 가입경로' }
													]"
													id="inline-form-custom-select-pref3">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 실가입경로' }
													]"
													id="inline-form-custom-select-pref4">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 최종학력' }
													]"
													id="inline-form-custom-select-pref5">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 모든학기' }
													]"
													id="inline-form-custom-select-pref6">
											</b-form-select>
											
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>해당학기제외</span>
												<span class="checkmark"></span>
											</label>
										</b-form-group>
									</b-row>
									<b-row>
										<b-form-group label="성명">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="로그인ID">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="관리담당 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="가입아이피 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="로그인ID">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="전화번호 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="쿠폰번호 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label=" U_ID ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-col class="btn-box">
											<b-button type="submit" size="sm" variant="dark">검색시작</b-button>
											<b-button type="submit" size="sm" variant="dark">추가등록</b-button>
											<b-button type="submit" size="sm" variant="dark">다운로드</b-button>
										</b-col>
									</b-row>
									<b-row>
										<b-form-group label="상담유형 ">
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: '전체' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
										</b-form-group>
										<b-form-group label="상담시간 ">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
										</b-form-group>
										<b-form-group label="최종변경시간  ">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
										</b-form-group>
										<b-col class="btn-box">
											아래 검색결과의 선택항목에 (
											<b-button type="submit" size="sm" variant="light">SMS발송</b-button>
											<b-button type="submit" size="sm" variant="light">EMAIL발송</b-button>
											) 합니다.
											<b-button type="submit" size="sm" variant="dark">MAC Address</b-button>
										</b-col>
									</b-row>
									<b-row>
										<b-form-group label="재등록학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="과목수">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="실습등록학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="실습지역">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="학위신청학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="학점신청학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										
										<b-form-group label="학습자등록필요">
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span class="checkmark"></span>
											</label>
										</b-form-group>
										
										<b-form-group label="실습확인" class="ml-3">
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>사회복지</span>
												<span class="checkmark"></span>
											</label>
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>보육교사</span>
												<span class="checkmark"></span>
											</label>
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>평생교육</span>
												<span class="checkmark"></span>
											</label>
										
										</b-form-group>
									</b-row>
								</b-form>
							</b-col>
						</b-card>
						<!--form-->
						<b-card class="mb-30">
							<b-col><!-- md="12"-->
								Tab contents {{ i }}
							</b-col>
						</b-card>
					</b-tab>
					
					<!-- New Tab Button (Using tabs-end slot) -->
					<template #tabs-end>
						<b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
					</template>
					
					<!-- Render this if no tabs -->
					<template #empty>
						<!--<div class="text-center text-muted">
							There are no open tabs<br>
							Open a new tab using the <b>+</b> button above.
						</div>-->
						<!--기본-->
						
						<!--닫기버튼-->
						<button @click="closeTab(i)" class="search-close btn btn-icon bg-transparent float-right pr-0 pt-2">
							<i class="i-Close-Window text-22 text-muted"></i>
						</button>
						<!--타이틀-->
						<breadcumb :page="'회원조회'" :folder="'회원관리'" />
						<!--form-->
						<b-card class="mb-30">
							<b-col><!-- md="12"-->
								<b-form>
									<!--<b-row>
										<b-form-group label="가입일자">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
											<div class="form-check">
												<input
														class="form-check-input"
														type="checkbox"
														id="gridCheck1"
												/>
												<label class="checkbox checkbox-dark">
													<input type="checkbox" />
													<span>전체기간</span>
													<span class="checkmark"></span>
												</label>
											</div>
										</b-form-group>
										
										<b-form-group label=".">
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
										</b-form-group>
									</b-row>-->
									
									<b-row>
										<b-form-group label="가입일자">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
											<!--<div class="form-check">
												<input
														class="form-check-input"
														type="checkbox"
														id="gridCheck1"
												/>
												<label class="form-check-label" for="gridCheck1">
													전체
												</label>
											</div>-->
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>전체</span>
												<span class="checkmark"></span>
											</label>
										</b-form-group>
										
										<b-form-group label=".">
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: '소속그룹검색' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 관심분야' }
													]"
													id="inline-form-custom-select-pref2">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 가입경로' }
													]"
													id="inline-form-custom-select-pref3">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 실가입경로' }
													]"
													id="inline-form-custom-select-pref4">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 최종학력' }
													]"
													id="inline-form-custom-select-pref5">
											</b-form-select>
											
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' 모든학기' }
													]"
													id="inline-form-custom-select-pref6">
											</b-form-select>
											
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>해당학기제외</span>
												<span class="checkmark"></span>
											</label>
										</b-form-group>
									</b-row>
									<b-row>
										<b-form-group label="성명">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="로그인ID">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="관리담당 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="가입아이피 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="로그인ID">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="전화번호 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label="쿠폰번호 ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-form-group label=" U_ID ">
											<b-form-input></b-form-input>
										</b-form-group>
										
										<b-col class="btn-box">
											<b-button type="submit" size="sm" variant="dark">검색시작</b-button>
											<b-button type="submit" size="sm" variant="dark">추가등록</b-button>
											<b-button type="submit" size="sm" variant="dark">다운로드</b-button>
										</b-col>
									</b-row>
									<b-row>
										<b-form-group label="상담유형 ">
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: '전체' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
										</b-form-group>
										<b-form-group label="상담시간 ">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
										</b-form-group>
										<b-form-group label="최종변경시간  ">
											<b-form-input></b-form-input>
											<b-form-input></b-form-input>
										</b-form-group>
										<b-col class="btn-box">
											아래 검색결과의 선택항목에 (
											<b-button type="submit" size="sm" variant="light">SMS발송</b-button>
											<b-button type="submit" size="sm" variant="light">EMAIL발송</b-button>
											) 합니다.
											<b-button type="submit" size="sm" variant="dark">MAC Address</b-button>
										</b-col>
									</b-row>
									<b-row>
										<b-form-group label="재등록학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="과목수">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
										)
										</b-form-group>
										<b-form-group label="실습등록학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="실습지역">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="학위신청학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										<b-form-group label="학점신청학기">
											(
											<b-form-select
													class
													v-model="selected1"
													:options=" [
													  { value: 'x', text: ' -----' }
													]"
													id="inline-form-custom-select-pref1">
											</b-form-select>
											)
										</b-form-group>
										
										<b-form-group label="학습자등록필요">
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span class="checkmark"></span>
											</label>
										</b-form-group>
										
										<b-form-group label="실습확인" class="ml-3">
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>사회복지</span>
												<span class="checkmark"></span>
											</label>
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>보육교사</span>
												<span class="checkmark"></span>
											</label>
											<label class="checkbox checkbox-dark">
												<input type="checkbox" />
												<span>평생교육</span>
												<span class="checkmark"></span>
											</label>
											
										</b-form-group>
									</b-row>
								</b-form>
							</b-col>
						</b-card>
						<!--form-->
						<b-card class="mb-30">
							<b-col><!-- md="12"-->
								Tab contents {{ i }}
							</b-col>
						</b-card>
						
						<!--기본-->
					</template>
				</b-tabs>
			</b-card>
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
<style>
	
	/*.form-box legend{display:inline-block;width:auto;}
	.form-box div{display:inline-block}*/
	/*.dyn-tab-box .tab-content{border-radius:0;border:0}*/
</style>