#include<stdio.h>
#define ll long long

ll dp[91];
int main(){
	int n;
	scanf("%d",&n);
	dp[0]=0;
	for(int i=1;i<=n;i++){
		if(i==1) dp[i]=1;
		if(i>1){
			dp[i]=dp[i-1]+dp[i-2];
		}
	}
	printf("%lld\n",dp[n]);
}
