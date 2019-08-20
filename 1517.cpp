#include<stdio.h>
typedef long long ll;

ll arr[50001];
ll copyArr[50001];

void swapCnt(int l,int r){
	if(r-l<=0) return;
	int mid=(l+r)/2;
	swapCnt(l,mid);
	swapCnt(mid+1,r);
	int i=l;
	int j=mid+1;
	int temp=l;

	while(i<=mid && j<=r){
		if(arr[i]>arr[j]){
			copyArr[temp++]=arr[j++];
		}
		else copyArr[temp++]=arr[i++];
	}
	while(i<=mid){
		copyArr[temp++]=arr[i++];
	}
	while(j<=r){
		copyArr[temp++]=arr[j++];
	}
	for(int a=l;a<=r;a++){
		arr[a]=copyArr[a];
	}
	return;
}

int main(){
	int n;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%lld",&arr[i]);
	}
	swapCnt(0,n-1);
	for(int i=0;i<n;i++){
		printf("%lld ",arr[i]);
	}

}


