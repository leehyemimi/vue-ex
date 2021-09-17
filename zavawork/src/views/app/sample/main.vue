<template>
	<div class="main-content">
		
		<b-row>
			<b-col xl="7">
				<div class="card mb-3 text-14">
					<div class="card-header"><strong>송찬호</strong>(zavawork00)님의 접속정보 조회 ㅣ <mark class="text-13">접속 서버 IP : 210.116.112.7</mark></div>
					<div class="card-body">
						<div class="card-text  ">
							<div class="section-info custom-separator mt-0 mb-1">
								<b-badge href="#" pill variant="secondary p-2 m-1">이전접속</b-badge>
								<span class="text-light ml-1">20210916 14:53 ~ 20210916 16:03 (01:10:31)</span>
								<p class="text-light mt-2 mb-3"> <mark class="text-light text-13">210.120.44.140</mark>, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR..</p>
							</div>
							
							<div class="section-info custom-separator mt-2 mb-3">
								<b-badge href="#" pill variant="primary p-2 m-1">현재접속</b-badge>
								<span class="text-primary ml-1">20210916 14:53 ~ 20210916 16:03 (01:10:31)</span><br>
								<p class="text-primary mt-2 mb-3"><mark class="text-primary text-13">210.120.44.140</mark>, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR..</p>
							</div>
						</div>
						<div class="text-info text-12">
							※ MAC_ADDRESS : ( ), IP : ( 210.120.44.140 )
							<b-form-input></b-form-input>
							<b-form-input></b-form-input>
							<b-form-input></b-form-input>
						</div>
					</div>
				</div>
				<div class="text-danger text-13">※ 위의 이전접속 IP와 현재접속 IP가 상이할경우 귀하의 ID로 다른 PC에서 접속하였을 수도 있으므로 의심될 경우 문의바랍니다. </div>
			</b-col>
			<b-col xl="5">
				<div class="card">
					<div class="card-header text-12"><strong>※ CRM 화면이 정상적으로 보이지 않을때는 아래와 같이 호환성 보기 설정에서 사이트를 등록해 주세요.</strong></div>
					<div class="card-body">
						<p style="text-align:center"><img src="http://crm.dev.caedu.co.kr/images/site_set1.jpg" alt=""></p>
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				date: '',
				form: {
					name: "",
					email: "",
					fName: "",
					lName: "",
					phone: ""
				}
			}
		},
		methods: {
		}
	}
</script>
<style>
	.form-control,
	.custom-select{padding:0 25px 0 5px;min-width:105px;width:auto;display:inline-block;margin-left:5px}
	.form-control{width:120px;}
	.form-control:first-child,
	.custom-select:first-child{margin-left:0}
</style>