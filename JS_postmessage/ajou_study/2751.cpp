#include<stdio.h>
int arr[1000001];

void swap(int a,int b){
	int temp=arr[a];
	arr[a]=arr[b];
	arr[b]=temp;
}

void quickSort(int l,int r){
	if(r-l<=0) return; //원소가 1개이하이기때문에 비교 x
	int pivotIndex=(l+r)/2;
	int pivot=arr[pivotIndex];
	swap(pivotIndex,r);
	int i=l;
	for(int j=l;j<r;j++){
		if(arr[j]<pivot){
			swap(i,j);
			i++;
		}
	}
	swap(i,r);
	quickSort(l,i-1);
	quickSort(i+1,r);
}

int main(){
	int n;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	quickSort(0,n-1);
	for(int i=0;i<n;i++){
		printf("%d ",arr[i]);
	}
	printf("\n");
}

