#include<stdio.h>
#include<algorithm>
#define ll long long
using namespace std;
int arr[301];
ll dp[301];
int main(){

	int n;
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		scanf("%d",&arr[i]);
		if(i>2){
			dp[i]=max(arr[i-1]+arr[i]+dp[i-3],dp[i-2]+arr[i]);
		}
		else if(i==1) dp[i]=arr[i];
		else if(i==2) dp[i]=dp[i-1]+arr[i];
	}
	
	printf("%lld\n",dp[n]);
}
	
	
