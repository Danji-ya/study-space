#include<stdio.h>
#include<algorithm>

using namespace std;
int arr[10001];
int dp[10001];

int main(){
	int n;
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		scanf("%d",&arr[i]);
		if(i==1) dp[i]=arr[i];
		if(i==2) dp[i]=dp[i-1]+arr[i];
		if(i>2){
			dp[i]=max(dp[i-1],max(arr[i]+arr[i-1]+dp[i-3],arr[n]+dp[i-2]));
		}
	}
	for(int i=1;i<=n;i++){
		printf("dp[%d]는 %d\n",i,dp[i]);
	}
	printf("%d\n",dp[n]);
}
