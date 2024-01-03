RESULT_1 :
select distinct item from ASSET;

RESULT_2 :
select USER.user_id, ASSET.item
from USER
inner join ASSET on USER.user_id = ASSET.user_id;
