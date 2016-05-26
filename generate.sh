rm -rf "./.generate"
mkdir "./.generate"
cd "./.generate"

top_level_names=("AFM" "CN" "ESW" "FATF" "IND" "LIEC" "KPCN" "PPS" "RIEC" "UNODC" "VFN" "UWV")

for top_level_name in "${top_level_names[@]}"
do
  mkdir $top_level_name
  cd $top_level_name
  for num in {1..20}
  do
    random_date=$(($(( ( RANDOM % 55 )  + 1 )) + 1960))
    random_num=$RANDOM$RANDOM$RANDOM
    random_sub_level_data_code="${random_date}-${random_num}"
    mkdir $random_sub_level_data_code
    cd $random_sub_level_data_code
    for num in {1..20}
    do
      random_date=$(($(( ( RANDOM % 55 )  + 1 )) + 1960))
      random_num=$RANDOM$RANDOM$RANDOM
      random_sub_level_data_code="DOSSIER-${random_num}"
      mkdir $random_sub_level_data_code
    done
    cd ..
  done
  cd ..
done